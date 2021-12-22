import { Record } from "react-admin";

export interface Comment extends Record {
    id: number,
    name: string,
    email: string,
    body: string
}