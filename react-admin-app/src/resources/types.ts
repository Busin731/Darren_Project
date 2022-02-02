import { FieldProps, Identifier, Record } from "react-admin";

export interface Comment extends Record {

}

export interface CardListProps extends FieldProps {
    resourceId: Identifier | undefined;
    resource: string;
}
export interface CommentCardProps extends Record {
    status: string;     // first | middle | attach,
    record: any;
}

export interface DrawerListProps {
    resourceId: Identifier | undefined;
    resource: string;
}