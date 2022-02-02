import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationTopBar from "./NotificationDrawerTopBar";
import NotificationCardList from "./NotificationCardList";
import { useSelector, useDispatch } from 'react-redux';
import { NotificationState } from '../../admins/type';
import { viewAsFeed } from "../../admins/actions";
import { useEffect, useState } from "react";
const useStyles = makeStyles({
	drawerContent: {
		width: 400,
		position: "relative",
		overflow: "hidden",
        height: "100%"
	},
});

const NotificationDrawerList = (props: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isViewAsFeed = useSelector((state: NotificationState) => state.isViewAsFeed)
    
   const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => {
        dispatch(viewAsFeed('false'));
    }

    useEffect(() => {
        if (isViewAsFeed==='true'){
            setOpen(true);
        } else {
            setOpen(false);
        }
    },[isViewAsFeed, setOpen])

    return (
        <Drawer
            open={open}
            anchor="right"
            onClose={handleClose}
        >
            <div className={classes.drawerContent}>
                <NotificationTopBar />
                <NotificationCardList data={props.props.data} basePath={props.props.basePath} ids={props.props.ids}/>
            </div>
        </Drawer>
    )
}

export default NotificationDrawerList;