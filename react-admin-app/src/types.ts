import { ReduxState, Record, Identifier } from "react-admin";

export type ThemeName = "light" | "dark";

export type CommentAdd = string;

export type CommentFilter = "ByMe" | "All";

export type CommentInsert = string;

export type CommentInserted = "true" | "false";

export interface AppState extends ReduxState {
	theme: ThemeName;
}

export interface CommentState extends ReduxState {
	isCreate: CommentAdd;
	filterBy: CommentFilter;
	insertAt: CommentInsert;
	isInserted: CommentInserted;
}

export interface SerializeDate {
	serializeDate: boolean;
}

export interface Post extends Record {
	user_id: Identifier;
	title: string;
	body: string;
}

export interface User extends Record {
	first_name: string;
	last_name: string;
	address: string;
	stateAbbr: string;
	city: string;
	zipcode: string;
	avatar: string;
	birthday: string;
	first_seen: string;
	last_seen: string;
	has_ordered: boolean;
	latest_purchase: string;
	has_newsletter: boolean;
	groups: string[];
	nb_commands: number;
	total_spent: number;
}

export type ResourceType = "post" | "user" | "comment";

export interface Comment extends Record {
	resource: ResourceType;
	resource_id: Identifier;
	email: string;
	user_id: Identifier;
	body: string;
}

declare global {
	interface Window {
		restServer: any;
	}
}
