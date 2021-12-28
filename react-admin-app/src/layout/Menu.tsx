import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import LabelIcon from "@material-ui/icons/Label";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import {
	useTranslate,
	DashboardMenuItem,
	MenuItemLink,
	MenuProps,
	ReduxState,
} from "react-admin";

import users from "../components/users";
import posts from "../components/posts";
import comments from "../components/comments";
import SubMenu from "./SubMenu";
import { AppState } from "../types";

type MenuName = "menuCatalog" | "menuSales" | "menuCustomers";

const Menu = ({ dense = false }: MenuProps) => {
	const [state, setState] = useState({
		menuCatalog: true,
		menuSales: true,
		menuCustomers: true,
	});
	const translate = useTranslate();
	const open = useSelector(
		(state: ReduxState) => state.admin.ui.sidebarOpen
	);
	useSelector((state: AppState) => state.theme); // force rerender on theme change
	const classes = useStyles();

	const handleToggle = (menu: MenuName) => {
		setState((state) => ({ ...state, [menu]: !state[menu] }));
	};

	return (
		<div
			className={classnames(classes.root, {
				[classes.open]: open,
				[classes.closed]: !open,
			})}>
			{" "}
			<MenuItemLink
				to={{
					pathname: "/users",
					state: { _scrollToTop: true },
				}}
				primaryText={translate(`resources.users.name`, {
					smart_count: 2,
				})}
				leftIcon={<users.icon />}
				dense={dense}
			/>
			<MenuItemLink
				to={{
					pathname: "/posts",
					state: { _scrollToTop: true },
				}}
				primaryText={translate(`resources.posts.name`, {
					smart_count: 2,
				})}
				leftIcon={<posts.icon />}
				dense={dense}
			/>
			<MenuItemLink
				to={{
					pathname: "/comments",
					state: { _scrollToTop: true },
				}}
				primaryText={translate(
					`resources.comments.name`,
					{
						smart_count: 2,
					}
				)}
				leftIcon={<comments.icon />}
				dense={dense}
			/>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	open: {
		width: 200,
	},
	closed: {
		width: 55,
	},
}));

export default Menu;
