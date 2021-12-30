import { useGetList } from "react-admin";
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
    const { data, ids } = useGetList(
        "comments",
        { page: 1, perPage: 100 },
        { field: "createdAt", order: "DESC" },
        { resourceId, resource }
    );
    return (
        <div className={classes.listContainer}>
            <CommentCard id={-1} status="create" record={{resource, resourceId}} />
            {ids.map((id: any, index: number) => {
                    const record = data[id];
                    return <CommentCard id={id} key={index} status="rud" record={record} />
            })}
        </div>
    )
}

export default CardList;