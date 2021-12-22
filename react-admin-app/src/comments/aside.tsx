import React from "react";
import {
  TextField,
  SimpleForm,
  useRecordContext,
  useGetList,
  Record,
  CreateButton, 
  EditButton,
  Toolbar,
  DeleteButton
} from "react-admin";
import { Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

interface CommentListProps {
    record?: Record;
}

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    card: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

const CommentToolbar = (props: any) => (
    <Toolbar {...props} classes={useStyles()}>
        <CreateButton />
        <EditButton 
            basePath="/comments"
            variant="contained"
        />
        <DeleteButton 
            redirect="show"
        />
    </Toolbar>
);

const CommentList = ({record}: CommentListProps) => {
    const { data, ids, loading, error } = useGetList(
        'comments',
        { page: 1, perPage: 10 },
        { field: 'id', order: 'DESC' },
        { postId: record && record.id }
    );
    if (loading) { return <p>Loading...</p>; }
    if (error) { return <p>ERROR</p>; }
    return (
        <Box m="0 0 1em 1em">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>                
                <Typography variant="h6" gutterBottom>
                    Comments
                </Typography>
                <CreateButton basePath="/comments" label="Create comment" />
            </div>
        {ids.map(id => {
            let record = data[id];
            return (
            <Card style={{marginBottom: 10}} key={id}>
                <SimpleForm record={record} toolbar={<CommentToolbar />}>
                    <TextField source="name" />                
                    <TextField source="email" label="Author" />
                    <TextField source="body" />
                </SimpleForm>
            </Card>
            )
        })}
        </Box>
    );
};

export const Aside = () => {
    const record = useRecordContext();
    return (
        <div style={{width: '400px'}}>
        {record && <CommentList record={record} />}
        </div>
    )
}