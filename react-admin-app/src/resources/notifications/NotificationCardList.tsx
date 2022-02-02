import NotificationCard from "./NotificationCard";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listContainer: {
            height: "calc(100% - 50px)",
            overflow: "auto"
        },
    }),
);

const NotificationCardList = (props: any) => {
    const classes = useStyles();
	const Ids = props.ids;
    const Data = props.data;
    const basePath = props.basePath;

    return (
        <div className={classes.listContainer}>
            {Ids.map((id: any) => {
                const record = Data[id];
                return (
                    <NotificationCard 
                        key={id}
                        record={{ ...record, basePath }}
                    />
                )
            })}
        </div>
    )
}

export default NotificationCardList;