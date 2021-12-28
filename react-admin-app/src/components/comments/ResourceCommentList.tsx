import { ReactElement, useEffect, useState } from "react";
import {
	Identifier,
	useAuthProvider,
	useDataProvider,
	useGetList,
} from "react-admin";
import CommentThread from "./CommentThread";
import { makeStyles } from "@material-ui/core/styles";
import CommentCard from "./CommentCard";
import { useSelector } from "react-redux";
import { CommentState } from "../../types";
import { useDispatch } from "react-redux";
import { commentAdd } from "../../actions/actions";

const useStyles = makeStyles({
	root: {
		height: "calc(100% - 48px)",
		overflow: "auto",
		padding: "15px",
	},
});

const ResourceCommentList = (props: any): ReactElement => {
	const classes = useStyles();
	const [isFirst, setFirst] = useState(true);
	const [ids, setIds] = useState<Identifier[]>([]);
	const [data, setData] = useState<any[]>([]);
	const [email, setAuth] = useState();
	const [cardCount, setCount] = useState(0);
	const [openNew, setNew] = useState(true);
	const dataProvider = useDataProvider();
	const isCreate = useSelector((state: CommentState) => state.isCreate);
	const filterBy = useSelector((state: CommentState) => state.filterBy);
	const dispatch = useDispatch();
	const authProvider = useAuthProvider();

	const handleDelete = (id: number) => {
		dataProvider
			.delete("comments", { id })
			.then((response) => {
				console.log(response);
				setIds((ids) =>
					ids.filter((item) => item !== id)
				);
				dispatch(commentAdd("false"));
			})
			.catch((error) => console.log(error));
	};

	const {
		data: parentComments,
		ids: parentIds,
		loading,
		error,
		loaded,
	} = useGetList(
		"comments",
		{ page: 1, perPage: 100 },
		{ field: "date", order: "DESC" },
		{ resource: props.resource, resource_id: props.resourceId }
	);

	useEffect(() => {
		if (loaded && isFirst) {
			setIds(parentIds);
			// @ts-ignore
			setData(parentComments);

			setFirst(false);
		}
	}, [parentIds, parentComments, loaded, isFirst]);

	useEffect(() => {
		if (authProvider) {
			// @ts-ignore
			authProvider
				.getIdentity()
				.then((res) => setAuth(res.email))
				.catch((err) => console.log(err));
		}
	}, [authProvider]);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>ERROR</p>;
	}

	return (
		<div className={classes.root}>
			{isCreate === "true" && (
				<CommentCard
					type="new"
					resourceId={props.resourceId}
					resource={props.resource}
					handleDelete={handleDelete}
				/>
			)}
			{ids.map((id, index) => {
				// @ts-ignore
				const record = data[id];
				return (
					<>
						{filterBy === "All" ? (
							<CommentCard
								key={
									index.toString() +
									"parent"
								}
								{...record}
								handleDelete={
									handleDelete
								}
							/>
						) : record.email === email ? (
							<CommentCard
								key={index.toString()}
								{...record}
								handleDelete={
									handleDelete
								}
							/>
						) : (
							<></>
						)}
						<CommentThread
							key={
								index.toString() +
								"child"
							}
							{...record}
						/>
					</>
				);
			})}
		</div>
	);
};

export default ResourceCommentList;
