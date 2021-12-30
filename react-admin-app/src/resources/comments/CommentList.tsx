import {
    List,
    Datagrid,
    TextField,
    EmailField,
    ListProps,
    EditButton
} from "react-admin";
import LinkToRelatedResource from "./LinkToRelatedResource";

const CommentList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <EmailField source="email" label="Author" />
            <TextField source="body" label="Comment" />
            <EditButton />
            <LinkToRelatedResource />
        </Datagrid>
    </List>
);

export default CommentList;