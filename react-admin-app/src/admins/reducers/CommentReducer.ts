import { Reducer } from "react";

import { commentAdd, COMMENT_ADD } from "../actions";

import { CommentAdd } from "../types";

type AddState = CommentAdd;
type AddAction =
    | ReturnType<typeof commentAdd>
    | { type: "OTHER_ACITON"; payload?: any };

export const commentAddReducer: Reducer<AddState, AddAction> = (
    previousState = "false",
    action
) => {
    if (action.type === COMMENT_ADD) {
        return action.payload;
    }
    return previousState;
};
