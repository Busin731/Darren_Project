import React, { Fragment, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, Datagrid, EmailField, List, ShowButton, TextField } from "react-admin";
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

const UserList: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/users');
    }, [history]);

    return (
        <Fragment>
            <List {...props}>
                <Datagrid rowClick={"show"}>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            </List>
            <Route path={"/users/:id/show"}>
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

export default UserList;