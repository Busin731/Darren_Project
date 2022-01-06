import { useEffect, useState, Fragment } from "react";
import { Identifier, useDataProvider, useGetList, useNotify } from "react-admin";
import CommentCard from "./CommentCard";
import { CardListProps } from "./types";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listContainer: {
            height: "calc(100% - 50px)",
            overflow: "auto"
        },
    }),
);

const CardList = (props: CardListProps) => {
    const classes = useStyles();
    const { resource, resourceId } = props;
	const [isFirst, setFirst] = useState(true);
	const [Ids, setIds] = useState<Identifier[]>([]);
	const [Data, setData] = useState<any>([]);
    const [card_flags, setFlag] = useState<boolean[]>([]);
    const [insertCount, setInsertCount] = useState<number>(0);
    const [insertIds, setInsertIds] = useState<Identifier[]>([]);
    const [insertData, setInsertData] = useState<any>([]);
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const { data, ids, loaded } = useGetList(
        "comments",
        { page: 1, perPage: 100 },
        { field: "createdAt", order: "DESC" },
        { resourceId, resource }
    );
    const handleDelete = (info: any) => {
        const { id , status, card_index} = info;
		dataProvider
			.delete("comments", { id })
			.then((response) => {
                if (status !== "insert") {
                    setIds((Ids) =>
                        Ids.filter((item) => item !== id)
                    );
                } else {
                    setFlag((flags) => {
                        flags[card_index] = false;
                        return flags;
                    });
                }
                notify("Deleted successfully");
			})
			.catch((error) => console.log(error));
	};

    const handleCreate = (info: any) => {
        dataProvider
        .create("comments", { data:info})
        .then((response) => {
            let { data } = response;
            let count = insertCount + 1;
            setInsertCount(count);

            insertIds[count - 1] = data.id;
            setInsertIds(insertIds);

            insertData[count - 1] = data;
            setInsertData(insertData);

            card_flags[count - 1] = true;
            setFlag(card_flags);
             notify("Created successfully");
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        if (loaded && isFirst) {
            setData(data);
            setIds(ids);
            setFirst(false);
        }
    }, [data, ids, loaded, isFirst])


    return (
        <div className={classes.listContainer}>
                <CommentCard 
                    id={-1}
                    status="create"
                    record={{resource, resourceId}} 
                    handleCreate = {handleCreate}
                />
            {Ids.map((id: any, index: number) => {
                const record = Data[id];
                return (
                    <CommentCard 
                        id={id}
                        key={index}
                        card_index={index}
                        status="rud"
                        record={record}
                        handleDelete={handleDelete}
                    />
                )
            })}

            {card_flags.map((flag, index) => {
                if (card_flags[index] === false)
                    return (
                        <Fragment
                            key={index}>
                        </Fragment>
                    );
                const Card = (
                    <CommentCard 
                        id={insertIds[index]}
                        key={index}
                        status="insert"
                        card_index={index}
                        record={ insertData[index] }
                        handleDelete={handleDelete}
                    />
                );

                return Card;
            })}
        </div>
    )
}

export default CardList;