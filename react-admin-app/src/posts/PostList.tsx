import React, { Fragment, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, Datagrid, EditButton, List, ShowButton, TextField } from "react-admin";
import { Route } from "react-router";
import { Drawer, Card } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import CommentDrawerList from "../comments/CommentDrawerList";

const useStyles = makeStyles({
    drawerContent: {
        width: 300
    }
})

const PostListActions = () => (
    <CardActions>

    </CardActions>
)

const PostList: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/posts');
    }, [history]);

    return (
        <Fragment>
            <List {...props}>
                <Datagrid rowClick={"show"}>
                    <TextField source="id" />
                    <TextField source="title" />
                    <TextField source="body" />
                </Datagrid>
            </List>
            <Route path={"/posts/:id/show"}>
                {({ match }) => {
                    const isMatch =
                        match &&
                        match.params &&
                        match.params.id !== 'show' || false;
                    const postId = parseInt(match?.params.id || '0');
                    return (
                        <Drawer
                            open={isMatch}
                            anchor="right"
                            onClose={handleClose}
                        >
                            <Card style={{width: '300px'}}>
                                <CommentDrawerList postId={postId}/>
                            </Card>
                        </Drawer>
                    )
                }}
            </Route>
        </Fragment>
    )
}

export default PostList;