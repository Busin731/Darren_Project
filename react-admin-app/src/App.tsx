import * as React from "react";
import { Admin, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";

import authProvider from "./authProvider";
import themeReducer from "./reducers/themeReducer";
import {
	commentAddReducer,
	commentFilterReducer,
	commentInsertedReducer,
	commentInsertReducer,
} from "./reducers/commentReducer";
import { Login, Layout } from "./layout";
// import { Dashboard } from './dashboard';
import customRoutes from "./routes";
import englishMessages from "./i18n/en";
import users from "./components/users";
import posts from "./components/posts";
import comments from "./components/comments";
import CustomList from "./components/posts/CustomPostList";

import dataProviderFactory from "./dataProvider";

const i18nProvider = polyglotI18nProvider((locale) => {
	if (locale === "fr") {
		return import("./i18n/fr").then((messages) => messages.default);
	}

	// Always fallback on english
	return englishMessages;
}, "en");

const App = () => {
	return (
		<Admin
			title="SoftwareStar Comment Module"
			dataProvider={dataProviderFactory(
				process.env.REACT_APP_DATA_PROVIDER || ""
			)}
			customReducers={{
				theme: themeReducer,
				isCreate: commentAddReducer,
				filterBy: commentFilterReducer,
				insertAt: commentInsertReducer,
				isInserted: commentInsertedReducer,
			}}
			customRoutes={customRoutes}
			authProvider={authProvider}
			// dashboard={Dashboard}
			loginPage={Login}
			layout={Layout}
			i18nProvider={i18nProvider}
			disableTelemetry>
			<Resource name="users" {...users} />
			<Resource name="posts" {...posts} />
			<Resource name="comments" {...comments} />
		</Admin>
	);
};

export default App;
