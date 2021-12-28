import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import { commentAdd, commentFilter } from "../../actions/actions";
import { useDispatch } from "react-redux";

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		minWidth: 30,
		borderRadius: 20,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		paddingLeft: 20,
		fontSize: 16,
		"&:focus": {
			borderRadius: 20,
			borderColor: "#000",
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "sticky",
		top: 0,
	},
	appbar: {
		color: "black",
		backgroundColor: "white",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	title: {
		fontSize: "1em",
		display: "flex",
		alignItems: "center",
	},
	formControl: {
		marginLeft: theme.spacing(1),
		minWidth: 50,
	},
	selectEmpty: {},
	flex: {
		display: "flex",
		alignItems: "center",
	},
}));

export default function CommentTopBar() {
	const classes = useStyles();
	const [filter, setFilter] = React.useState("All");
	const dispatch = useDispatch();

	const handleChange = (event: any) => {
		setFilter(event.target.value);
		dispatch(commentFilter(event.target.value));
	};

	return (
		<div className={classes.root}>
			<AppBar position="sticky" className={classes.appbar}>
				<Toolbar
					variant="dense"
					className={classes.toolbar}>
					<div className={classes.flex}>
						<Typography
							variant="h6"
							className={
								classes.title
							}>
							Comments
						</Typography>
						<FormControl
							variant="filled"
							className={
								classes.formControl
							}>
							<Select
								value={filter}
								onChange={
									handleChange
								}
								defaultValue={
									10
								}
								input={
									<BootstrapInput />
								}
								MenuProps={{
									anchorOrigin:
										{
											vertical: "bottom",
											horizontal: "left",
										},
									transformOrigin:
										{
											vertical: "top",
											horizontal: "left",
										},
									getContentAnchorEl:
										null,
								}}>
								<MenuItem
									value={
										"All"
									}>
									All
								</MenuItem>
								<MenuItem
									value={
										"ByMe"
									}>
									By Me
								</MenuItem>
								<MenuItem
									value={
										"Mentioned"
									}>
									Mentioned
								</MenuItem>
							</Select>
						</FormControl>
					</div>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={() =>
							dispatch(
								commentAdd(
									"true"
								)
							)
						}>
						<AddCommentOutlinedIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
