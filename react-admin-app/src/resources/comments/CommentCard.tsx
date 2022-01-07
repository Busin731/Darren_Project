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
import Divider from '@material-ui/core/Divider';
import { Fragment } from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, useNotify, useUpdate } from "react-admin";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 3,
            "& .MuiTextField-root": {
                margin: "0 auto",
                width: "100%",
            },
            boxShadow: "none"
        },
        dividerFullWidth: {
            margin: `5px 0 0 ${theme.spacing(2)}px`,
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
        actions: {
            paddingLeft: 18,
        }
    }),
);

const CommentCard = (props: any) => {
    const classes = useStyles();
    const {
        id, 
        record, 
        status, 
        card_index,
        handleCreate,
        handleDelete
     } = props;
    const [anchorEl, setAnchorEl] = useState(null);
	const [isEdit, setStatus] = useState(false);
	const [comment, setComment] = useState("");
	const [isChanged, writing] = useState(false);  
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
        setStatus(false);
	};

    const handleChange = (event: any) => {
		event.stopPropagation();
		setComment(event.target.value);
		writing(true);
	};

    const handleDeleting = (event: any) => {
        handleDelete({ id, status, card_index });
    }

    const handleCreating = (event: any) => {
        handleCreate({
            body: comment,
            date: new Date().toISOString(),
            userId: "1",
            email: "admin@gmail.com",
            resource: record.resource,
            resourceId: record.resourceId
        })

        setComment("");
    }


    const [update] = useUpdate(
        'comments', 
            record.id, 
            { body: comment }, 
            record,
            {
            onSuccess: () => {
                setStatus(false);
                setAnchorEl(null);
                notify("Updated successfully");
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
                            {status === "insert" ? "ME" : record?.email?.slice(0, 2).toUpperCase() || 'ME' }
                        </Avatar>
                    }
                    action={ !isCreate &&
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={ isCreate ? author : record.email }
                    subheader={ !isCreate ? new Date(record.date).toLocaleDateString() : "" }
                />
                
                <CardContent>
                    { isCreate ? (
                        <TextField
                            multiline
                            maxRows={5}
                            value={comment}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        ) : (
                            !isEdit ? (
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {comment}
                                    </Typography>
                                ) : (
                                    <TextField
                                        multiline
                                        maxRows={5}
                                        value={comment}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                            )
                        )
                    }
                </CardContent>
                <CardActions className={classes.actions}>
                    { (isEdit || isCreate )? (
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
                                    onClick={handleCreating}
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
                        ) : null
                    }
                </CardActions>
            </Card>
            <Divider variant="middle" />
            <Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem onClick={handleEdit}>
					Edit
				</MenuItem>
				<MenuItem onClick={handleDeleting}>
					Delete
				</MenuItem>
			</Menu>
        </Fragment>
    );
}

export default CommentCard;