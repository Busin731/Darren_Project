import { ReduxState } from "react-admin";

export type CommentAdd = string;

export interface CommentState extends ReduxState {
    isCreate: CommentAdd;
}