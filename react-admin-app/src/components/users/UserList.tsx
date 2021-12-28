import * as React from "react";

import {
	Fragment,
	ReactElement,
	useState,
	useEffect,
	useCallback,
} from "react";
import {
	BooleanField,
	Datagrid,
	DateField,
	DateInput,
	List,
	ListProps,
	NullableBooleanInput,
	NumberField,
	SearchInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import { Route } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import SegmentsField from "./SegmentsField";
import SegmentInput from "./SegmentsInput";
import MobileGrid from "./MobileGrid";
import CustomerLinkField from "./UserLinkField";
import ColoredNumberField from "./ColoredNumberField";
import CommentTopBar from "../comments/CommentTopBar";
import ResourceCommentList from "../comments/ResourceCommentList";
import UserListAside from "./UserListAside";
import { useDispatch } from "react-redux";
import { commentAdd, commentInsert } from "../../actions/actions";

const userFilters = [
	<SearchInput source="q" alwaysOn />,
	<DateInput source="last_seen_gte" />,
	<NullableBooleanInput source="has_ordered" />,
	<NullableBooleanInput source="has_newsletter" defaultValue />,
	<SegmentInput />,
];

const useStyles = makeStyles((theme) => ({
	nb_commands: { color: "purple" },
	hiddenOnSmallScreens: {
		display: "table-cell",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	drawerContent: {
		width: 400,
		position: "relative",
		overflow: "hidden",
	},
}));

const UserList = (props: ListProps): ReactElement => {
	const classes = useStyles();
	const isXsmall = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down("xs")
	);
	const isSmall = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down("sm")
	);
	const dispatch = useDispatch();
	const history = useHistory();
	const [topage, setPage] = useState(0);
	const [isFirst, setFirst] = useState(true);
	const [id, setID] = useState(0);

	useEffect(() => {
		if (isFirst && id > 10) {
			let page = Math.ceil(id / 10);
			setPage(page);
			setFirst(false);
		}
	}, [id]);

	const handleClose = useCallback(() => {
		history.push("/users");
		dispatch(commentAdd("false"));
		dispatch(commentInsert("false"));
	}, [history]);

	return (
		<Fragment>
			<List
				{...props}
				filters={isSmall ? userFilters : undefined}
				sort={{ field: "last_seen", order: "DESC" }}
				perPage={25}
				aside={<UserListAside />}>
				{isXsmall ? (
					<MobileGrid />
				) : (
					<Datagrid optimized rowClick="edit">
						<CustomerLinkField />
						<DateField source="last_seen" />
						<NumberField
							source="nb_commands"
							label="resources.customers.fields.commands"
							className={
								classes.nb_commands
							}
						/>
						<ColoredNumberField
							source="total_spent"
							options={{
								style: "currency",
								currency: "USD",
							}}
						/>
						<DateField
							source="latest_purchase"
							showTime
						/>
						<BooleanField
							source="has_newsletter"
							label="News."
						/>
						<SegmentsField
							cellClassName={
								classes.hiddenOnSmallScreens
							}
							headerClassName={
								classes.hiddenOnSmallScreens
							}
						/>
					</Datagrid>
				)}
			</List>
			<Route path={"/users/:id"}>
				{({ match }) => {
					const isMatch =
						(match &&
							match.params &&
							match.params.id !==
								"show") ||
						false;
					const userId = parseInt(
						match?.params.id || "0"
					);
					setFirst(true);
					setID(userId);
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
										userId
									}
									resource="user"
								/>
							</div>
						</Drawer>
					);
				}}
			</Route>
		</Fragment>
	);
};

export default UserList;
