import {
    List,
    Datagrid,
    TextField,
    EmailField,
    ListProps,
    EditButton,
} from "react-admin";
import Resource from "./Resource";
import ActionButton from "../ActionButton";

const CommentList = (props: ListProps) => {
    return (
        <List {...props}>
                <Datagrid >
                    <EmailField source="email" label="Author" />
                    <Resource/>
                    <TextField source="body" label="Comment" />
                    <ActionButton/>
                </Datagrid>
            </List>
    )
}

export default CommentList;