import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import ShowMoreText from "react-show-more-text";
import ShowMoreText from "../../utilities/showMoreText";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useCreate, useNotify, useUpdate, useTranslate } from "react-admin";
import {
	commentAdd,
	commentInsert,
	commentInserted,
} from "../../actions/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		marginTop: 10,
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "33ch",
		},
		"& .MuiCardActions-root ": {
			justifyContent: "center",
		},
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function CommentCard(record: any) {
	const classes = useStyles();
	const [newId, setId] = useState();
	const [p_id, setParent_id] = useState();
	const [isEdit, setStatus] = useState(false);
	const [isEditable, setEditable] = useState(false);
	const [isChanged, writing] = useState(false);
	const [comment, setComment] = useState("");
	const dispatch = useDispatch();
	const {
		id,
		date,
		email,
		body,
		handleDelete,
		type,
		resourceId,
		resource,
		iscc,
		parent_id,
	} = record;
	const notify = useNotify();

	const author = localStorage.getItem("email") || email;

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleEdit = (event: any) => {
		event.stopPropagation();
		setStatus(true);
		setAnchorEl(null);
	};

	const handleCreate = (isCreate: any) => {
		setStatus(isCreate);
		setEditable(!isCreate);
	};

	const handleComment = (event: any) => {
		dispatch(commentInsert(parent_id || p_id));
	};

	const handleClick = (event: any) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (event: any) => {
		event.stopPropagation();
		setComment(event.target.value);
		writing(true);
	};

	const handleCancel = (event: any) => {
		event.stopPropagation();
		setComment(body);
		writing(false);
		dispatch(commentAdd("false"));
	};

	const translate = useTranslate();
	const [approve] = useUpdate(
		"comments",
		record.id || newId,
		{ body: comment },
		record,
		{
			undoable: true,
			onSuccess: () => {
				notify(translate("Success"), {
					type: "info",
					undoable: true,
				});
				setStatus(false);
			},
			onFailure: () => {
				notify(translate("Error"), {
					type: "warning",
				});
				setStatus(false);
			},
		}
	);

	const [create, createdData] = useCreate(
		"comments",
		{
			email: "admin@gmail.com",
			date: new Date().toISOString(),
			body: comment,
			user_id: 500,
			parent_id: -1,
			resource: resource,
			resource_id: resourceId,
		},
		{
			undoable: false,
			onSuccess: (res) => {
				notify(translate("Success"), {
					type: "info",
					undoable: false,
				});
				setStatus(false);
				setEditable(true);
				dispatch(commentInserted("true"));
			},
			onFailure: () => {
				notify(translate("Error"), {
					type: "warning",
				});
				setStatus(false);
			},
		}
	);
	useEffect(() => {
		// set our variable to true
		let isApiSubscribed = true;

		return () => {
			// cancel the subscription
			isApiSubscribed = false;
		};
	}, []);

	useEffect(() => {
		setComment(body);
	}, [body]);

	useEffect(() => {
		let flag = false;
		if (type === "new" || type === "insert") flag = true;
		else flag = false;

		handleCreate(flag);
	}, [type]);

	useEffect(() => {
		let id = createdData ? createdData.data?.id : record.id;
		let p_id = createdData
			? createdData.data?.parent_id
			: record.parent_id;
		setId(id);
		setParent_id(p_id);
	}, [createdData]);

	const creatable = type === "new" || type === "insert";
	return (
		<>
			<Card
				onClick={handleComment}
				className={classes.root}
				style={
					iscc || type === "insert"
						? { marginTop: "0" }
						: {}
				}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="recipe"
							className={
								classes.avatar
							}>
							R
						</Avatar>
					}
					action={
						isEditable ? (
							<IconButton
								aria-label="settings"
								onClick={
									handleClick
								}>
								<MoreVertIcon />
							</IconButton>
						) : null
					}
					title={creatable ? author : email}
					subheader={
						creatable
							? new Date().toLocaleDateString()
							: new Date(
									date
							  ).toLocaleDateString()
					}
				/>
				<CardContent>
					{!isEdit ? (
						<Typography
							variant="body2"
							color="textSecondary"
							component="div">
							<ShowMoreText
								truncatedEndingComponent=""
								more={
									<div>
										Show
										more
									</div>
								}
								less={
									<div>
										Show
										less
									</div>
								}
								lines={2}>
								{comment}
							</ShowMoreText>
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
				{isEdit && (
					<CardActions>
						{creatable && !isEditable ? (
							<Button
								size="small"
								color="primary"
								variant="contained"
								disabled={
									!isChanged
								}
								onClick={
									create
								}>
								Comment
							</Button>
						) : (
							<Button
								size="small"
								color="primary"
								variant="contained"
								disabled={
									!isChanged
								}
								onClick={
									approve
								}>
								Save
							</Button>
						)}
						<Button
							size="small"
							color="primary"
							onClick={handleCancel}>
							Cancel
						</Button>
					</CardActions>
				)}
			</Card>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem
					onClick={(event) => handleEdit(event)}>
					Edit
				</MenuItem>
				<MenuItem
					onClick={(event) =>
						handleDelete(id || newId)
					}>
					Delete
				</MenuItem>
			</Menu>
		</>
	);
}
