import { useState } from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CommentTopBar from "./DrawerTopBar";
import CardList from "./CardList";
import { DrawerListProps } from "../types";
const useStyles = makeStyles({
	drawerContent: {
		width: 400,
		position: "relative",
		overflow: "hidden",
        height: "100%"
	},
});

const DrawerList = (props: DrawerListProps) => {
    const classes = useStyles();
    const { resourceId, resource } = props;
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(open => !open);
    }
    return (
        <Drawer
            open={open}
            anchor="right"
            onClose={handleClose}
        >
            <div className={classes.drawerContent}>
                <CommentTopBar />
                <CardList resourceId={resourceId} resource={resource} />
            </div>
        </Drawer>
    )
}

export default DrawerList;