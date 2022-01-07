import {
    List,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    ListProps
} from "react-admin";
import Resource from "./Resource";
import ActionButton from "./ActionButton";

const CommentList = (props: ListProps) => {
    return (
        <List {...props} sort={{ field: 'createdAt', order: 'DESC' }}>
            <Datagrid >
                <EmailField source="email" label="Author" />
                <Resource/>
                <TextField source="body" label="Comment" />
                <DateField source="createdAt" label="Date" />
                <ActionButton/>
            </Datagrid>
        </List>
    )
}

export default CommentList;