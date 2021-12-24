import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { withStyles } from '@material-ui/core/styles';
import { Button, Record } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

interface AddCommentButtonProps {
    classes: any,
    record: Record
}

const AddCommentButton = ({ classes, record }: AddCommentButtonProps) => (
  <Button
    className={classes.button}
    variant="contained"
    component={Link}
    to={`/comments/create?post_id=${record.id}&created_at=${new Date().toISOString()}`}
    label="Add a comment"
    title="Add a comment"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddCommentButton);
