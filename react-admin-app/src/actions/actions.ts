import {
	ThemeName,
	CommentAdd,
	CommentFilter,
	CommentInsert,
	CommentInserted,
} from "../types";

export const CHANGE_THEME = "CHANGE_THEME";
export const COMMENT_FILTER = "COMMENT_FILTER";
export const COMMENT_ADD = "COMMENT_ADD";
export const COMMENT_INSERT = "COMMENT_INSERT";
export const COMMENT_INSERTED = "COMMENT_INSERTED";

export const changeTheme = (theme: ThemeName) => ({
	type: CHANGE_THEME,
	payload: theme,
});

export const commentAdd = (isCreate: CommentAdd) => ({
	type: COMMENT_ADD,
	payload: isCreate,
});

export const commentFilter = (filter: CommentFilter) => ({
	type: COMMENT_FILTER,
	payload: filter,
});

export const commentInsert = (insertAt: CommentInsert) => ({
	type: COMMENT_INSERT,
	payload: insertAt,
});

export const commentInserted = (isInserted: CommentInserted) => ({
	type: COMMENT_INSERTED,
	payload: isInserted,
});
