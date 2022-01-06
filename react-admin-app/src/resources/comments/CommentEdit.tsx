import {
    Edit,
    SimpleForm,
    ReferenceField,
    TextInput,
    TextField,
    EditProps,
    EmailField
} from "react-admin";

const CommentsTitle = (props: any) => {
    const { record } = props;
    return record ? (
        <span>
            {"Comments"}
        </span>
    ) : null;
  };

const CommentEdit = (props: EditProps) => (
    <Edit title={ <CommentsTitle/> } {...props}>
        <SimpleForm>
            <TextField source="id" />
            <EmailField source="email" label="Author" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="title" />
            </ReferenceField>
            <TextInput source="body" multiline />
        </SimpleForm>
    </Edit>
);

export default CommentEdit;