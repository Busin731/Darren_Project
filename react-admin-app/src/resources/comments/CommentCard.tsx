import { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CommentCardProps } from './types';
import { Fragment } from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, useDelete, useNotify, useUpdate, useCreate } from "react-admin";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            margin: "10px auto",
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "34ch",
            },
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

const CommentCard = (props: CommentCardProps) => {
    const classes = useStyles();
    const { record, status } = props;
    const [anchorEl, setAnchorEl] = useState(null);
	const [isEdit, setStatus] = useState(false);
	const [comment, setComment] = useState("");
	const [isChanged, writing] = useState(false);  
    const history = useHistory();  
    const notify = useNotify();

    useEffect(() => {
		setComment(record.body);
	}, [record.body]);

    const handleEdit = () => {
		setStatus(true);
        setAnchorEl(null);
    }

    const handleClose = () => {
		setAnchorEl(null);
	};

    const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

    const handleCancel = (event: any) => {
		setComment(record.body);
		writing(false);
	};

    const handleChange = (event: any) => {
		event.stopPropagation();
		setComment(event.target.value);
		writing(true);
	};

    const [create] = useCreate("comments", {
        body: comment,
        date: new Date().toISOString(),
        email: "admin@gmail.com",
        resource: record.resource,
        resourceId: record.resourceId,
    }, {
        onSuccess: () => {
            notify("Created successfully");
            setStatus(false);
            setAnchorEl(null);
            history.goBack();
        },
        onFailure: () => {
            setStatus(false);
        }
    });
    const [update] = useUpdate('comments', record.id, { body: comment }, record, {
        onSuccess: () => {
            notify("Updated successfully");
            setStatus(false);
            setAnchorEl(null);
            history.goBack();
        },
        onFailure: () => {
            setStatus(false);
        }
    });
    const [deleteOne] = useDelete("comments", record.id, record, {
        onSuccess: () => {
            notify("Deleted successfully");
            setAnchorEl(null);
            setStatus(false);
            history.goBack();
        },
        onFailure: () => {
            setStatus(false);
        }
    });

    const isCreate = status === "create";
    const author = "admin@gmail.com";

    return (
        <Fragment>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="author" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={ isCreate ? author : record.email }
                    subheader={ !isCreate ? new Date(record.createdAt).toLocaleDateString() : "" }
                />
                {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                /> */}
                <CardContent>
                    { isCreate && 
                        <TextField
                            multiline
                            maxRows={5}
                            value={comment}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    }
                    { !isEdit ? (
                            <Typography variant="body2" color="textSecondary" component="p">
                                {record.body}
                            </Typography>
                        ) : (
                            <TextField
                                multiline
                                maxRows={5}
                                value={comment}
                                onChange={handleChange}
                                variant="outlined"
                            />
                    )}
                </CardContent>
                <CardActions>
                    { (isEdit || isCreate) && (
                        <>
                            { isEdit &&
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    disabled={!isChanged}
                                    onClick={update}
                                >
                                    <>Save</>
                                </Button>
                            }
                            { isCreate && 
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    disabled={!isChanged}
                                    onClick={create}
                                >
                                    <>Comment</>
                                </Button>
                            }
                            <Button
                                size="small"
                                color="primary"
                                onClick={handleCancel}
                            >
                                <>Cancel</>
                            </Button>
                        </>
                        )
                    }
                </CardActions>
            </Card>
            <Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem onClick={handleEdit}>
					Edit
				</MenuItem>
				<MenuItem onClick={deleteOne}>
					Delete
				</MenuItem>
			</Menu>
        </Fragment>
    );
}

export default CommentCard;