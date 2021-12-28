import { Reducer } from "redux";
import {
	COMMENT_ADD,
	commentAdd,
	commentFilter,
	COMMENT_FILTER,
	commentInsert,
	COMMENT_INSERT,
	commentInserted,
	COMMENT_INSERTED,
} from "../actions/actions";
import {
	CommentAdd,
	CommentFilter,
	CommentInsert,
	CommentInserted,
} from "../types";

// Comment Create

type AddState = CommentAdd;
type AddAction =
	| ReturnType<typeof commentAdd>
	| { type: "OTHER_ACTION"; payload?: any };

export const commentAddReducer: Reducer<AddState, AddAction> = (
	previousState = "false",
	action
) => {
	if (action.type === COMMENT_ADD) {
		return action.payload;
	}
	return previousState;
};

// Comment Filter

type FilterState = CommentFilter;
type FilterAction =
	| ReturnType<typeof commentFilter>
	| { type: "OTHER_ACTION"; payload?: any };

export const commentFilterReducer: Reducer<FilterState, FilterAction> = (
	previousState = "All",
	action
) => {
	if (action.type === COMMENT_FILTER) {
		return action.payload;
	}
	return previousState;
};

// Comments on Comment

type InsertState = CommentInsert;
type InsertAction =
	| ReturnType<typeof commentInsert>
	| { type: "OTHER_ACTION"; payload?: any };

export const commentInsertReducer: Reducer<InsertState, InsertAction> = (
	previousState = "false",
	action
) => {
	if (action.type === COMMENT_INSERT) {
		return action.payload;
	}
	return previousState;
};

// Comments on Comment result

type InsertedState = CommentInsert;
type InsertedActionn =
	| ReturnType<typeof commentInsert>
	| { type: "OTHER_ACTION"; payload?: any };

export const commentInsertedReducer: Reducer<InsertedState, InsertAction> = (
	previousState = "false",
	action
) => {
	if (action.type === COMMENT_INSERTED) {
		return action.payload;
	}
	return previousState;
};
