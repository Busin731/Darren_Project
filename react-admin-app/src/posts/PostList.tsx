import React, { Fragment, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardActions, SelectField, Datagrid, List, ReferenceField, TextField, ReferenceManyField, SimpleForm, SelectInput } from "react-admin";
import { Route } from "react-router";
import { Drawer, Card } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddCommentIcon from '@material-ui/icons/AddComment';
import CommentDrawerList from "../comments/CommentDrawerList";
import CommentCreate from "../comments/CommentCreate";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                <Datagrid rowClick="show">
                    <TextField source="id" label={"ID"}/>
                    <ReferenceField source="userId" reference="users" label={"Author"}>
                        <TextField source="name" />
                    </ReferenceField>
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

export default PostList;