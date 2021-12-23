import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../utilities/Avatar';
import Button from '@material-ui/core/Button';

interface CommentItemProps {
    comment: any;
}

const useStyles = makeStyles ({
    truncate: {
        width: 200,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
});

const CommentItem = ({ comment }: CommentItemProps) => {
    const classes = useStyles();
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar user={comment.author} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <div className={classes.truncate}>
                            <strong>
                                {comment.author ? comment.author.name : 'Anonymous'}
                            </strong>{' '}
                            {/* {comment.label} */}
                        </div>
                    }
                    // secondary={new Date(comment.createdAt).toLocaleString()}
                />            
            </ListItem><br/>
            <TextField multiline rows={1} placeholder={"write comment"} variant="outlined" style={{width: '270px', marginBottom: '10px'}}/><br/>
            <div>
                <Button size='small' variant="contained" color="primary">Save</Button>&nbsp;&nbsp;
                <Button size='small' variant="outlined" color="primary">Cancel</Button>
            </div>
        </>
    )
};

export default CommentItem;