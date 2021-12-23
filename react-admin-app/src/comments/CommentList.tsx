import React, { Fragment, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { 
    CardActions, 
    Datagrid, 
    List,
    TextField,
    TextInput,
    ReferenceInput,
    SelectInput,
    DateInput
} from "react-admin";
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

const CommentList: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/comments');
    }, [history]);

    const commentFilters = [
        <TextInput source="q" label="Search" alwaysOn />,
        <ReferenceInput source="commentId" label="Comment" reference="comments" allowEmpty>
          <SelectInput optionText="name" />
        </ReferenceInput>,
        <DateInput source="created_at" />,
        <DateInput source="updated_at" />
    ];


    return (
        <Fragment>
            <List {...props} filters={commentFilters}>
                <Datagrid rowClick={"show"}>
                    <TextField source="email" label={"Author"}/>
                    <TextField source="postId" label={"Resource"}/>
                    <TextField source="name" label={"Created at"}/>
                    <TextField source="name" label={"Updated at"}/>
                    <TextField source="body" label={"Comment"}/>
                </Datagrid>
            </List>
            <Route path={"/comments/:id/show"}>
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

export default CommentList;