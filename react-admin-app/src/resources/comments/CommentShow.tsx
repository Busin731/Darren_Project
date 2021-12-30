import { 
    ShowProps,
    Show,
    SimpleShowLayout,
    ReferenceField,
    TextField,
    EmailField
} from "react-admin";

const CommentShow = (props: ShowProps) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <EmailField source="email" label="Author" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export default CommentShow;