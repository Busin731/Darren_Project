import React, { Fragment, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardActions, Datagrid, EmailField, List, ShowButton, TextField } from "react-admin";
import { Route } from "react-router";
import { Drawer, Card } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import CommentDrawerList from "../comments/CommentDrawerList";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import AddCommentIcon from '@material-ui/icons/AddComment';

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
                    <TextField source="id" label={"ID"}/>
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
                            <div style={{display: 'flex', flexDirection: 'column', width: '300px', overflow: 'auto'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '10px'}}>
                                    <div style={{display: 'flex'}}>
                                        <h4>Comments</h4>&nbsp;
                                        <FormControl style={{width: '100px'}}>
                                            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            >
                                            <MenuItem value={10}>All</MenuItem>
                                            <MenuItem value={20}>You</MenuItem>
                                            <MenuItem value={30}>Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to={`/comments/create?post_id=${postId}&created_at=${new Date().toISOString()}`}
                                    >
                                        <AddCommentIcon />
                                    </Button>
                                </div>
                                {/* <CommentCreate {...props} /> */}
                                <CommentDrawerList postId={postId}/>
                                {/* <ReferenceManyField
                                    addLabel={false}
                                    reference="comments"
                                    target="post_id"
                                    sort={{ field: 'created_at', order: 'DESC' }}
                                >
                                    <Datagrid>
                                        <TextField source="postId" />
                                        <TextField source="body" />
                                    </Datagrid>

                                </ReferenceManyField>                                 */}
                            </div>
                        </Drawer>
                    )
                }}
            </Route>
        </Fragment>
    )
}

export default UserList;