import {
	Datagrid,
	TextField,
	ReferenceField,
	List,
	ListProps,
	useListContext,
} from "react-admin";
import { Route } from "react-router";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { Drawer } from "@material-ui/core";
import CustomerLinkField from "../users/UserLinkField";
import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CommentTopBar from "../comments/CommentTopBar";
import ResourceCommentList from "../comments/ResourceCommentList";
import { Pagination } from "../../utilities/pagination";
import { commentAdd, commentInsert } from "../../actions/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
	drawerContent: {
		width: 400,
		position: "relative",
		overflow: "hidden",
	},
});

const PostList = (props: ListProps): ReactElement => {
	const classes = useStyles();
	const history = useHistory();
	const [topage, setPage] = useState(0);
	const [isFirst, setFirst] = useState(true);
	const [id, setID] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isFirst && id > 10) {
			let page = Math.ceil(id / 10);
			setPage(page);
			setFirst(false);
		}
	}, [id]);

	const handleClose = useCallback(() => {
		history.push("/posts");
		dispatch(commentAdd("false"));
		dispatch(commentInsert("false"));
	}, [history]);

	return (
		<Fragment>
			<List
				{...props}
				pagination={
					<Pagination
						topage={topage}
						isurl={isFirst.toString()}
					/>
				}>
				<Datagrid rowClick="show">
					<TextField source="title" />
					<TextField
						source="body"
						label="Content"
					/>
					<ReferenceField
						source="user_id"
						reference="users"
						label="Author">
						<CustomerLinkField />
					</ReferenceField>
				</Datagrid>
			</List>
			<Route path={"/posts/:id"}>
				{({ match }) => {
					const isMatch =
						(match &&
							match.params &&
							match.params.id !==
								"show") ||
						false;
					const postId = parseInt(
						match?.params.id || "0"
					);
					setFirst(true);
					setID(postId);
					return (
						<Drawer
							open={isMatch}
							anchor="right"
							onClose={handleClose}>
							<div
								className={
									classes.drawerContent
								}>
								<CommentTopBar />
								<ResourceCommentList
									resourceId={
										postId
									}
									resource="post"
								/>
							</div>
						</Drawer>
					);
				}}
			</Route>
		</Fragment>
	);
};

export default PostList;
