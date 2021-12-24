import React from "react";
import { useGetList, SimpleForm, TextField } from "react-admin";
import { Box, Card } from "@material-ui/core";
import CommentItem from "./CommentItem";

interface CommentDrawerListProps {
    postId?: number | undefined;
}

const comments = [
    {
        id: 1234,
        label: 'modified post "Hello World"',
        createdAt: '2019-01-10T17:15:56.000Z',
        author: {
            name: 'John Doe',
            email: 'jitewaboh@lagify.com',
        },
    }
];

const CommentDrawerList = (props: CommentDrawerListProps) => {
    const { data, ids, loading, error } = useGetList(
        'comments',
        { page: 1, perPage: 10 },
        { field: 'created_at', order: 'DESC'},
        { postId: props.postId}
    );
    if (loading) { return <p>Loading...</p>; }
    if (error) { return <p>ERROR</p>; }
    return (
        <Box m="0 0 1em 1em">
            {ids.map(id => {
                let record = data[id];
                return <CommentItem key={id} comment={record}/>
            })}
        </Box>
    )
}

export default CommentDrawerList;