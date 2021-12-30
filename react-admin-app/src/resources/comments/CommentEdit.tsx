import {
    Edit,
    SimpleForm,
    ReferenceField,
    TextInput,
    TextField,
    EditProps,
    EmailField
} from "react-admin";

const CommentEdit = (props: EditProps) => (
    <Edit {...props}>
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