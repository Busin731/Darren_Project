import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import {useDispatch} from "react-redux"; 
import { commentAdd } from "../../admins/actions";

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
	const dispatch = useDispatch();

	const handleClick = (event: any) => {
		dispatch(commentAdd("true"));
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
					</div>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleClick}>
						<AddCommentOutlinedIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
