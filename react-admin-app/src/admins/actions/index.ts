import { CommentAdd } from "../types";

export const COMMENT_ADD = "COMMENT_ADD";

export const commentAdd = (isCreate: CommentAdd) => ({
    type: COMMENT_ADD,
    payload: isCreate
})