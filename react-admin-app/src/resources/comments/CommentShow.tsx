import { 
    ShowProps,
    Show,
    SimpleShowLayout,
    ReferenceField,
    TextField,
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

const CommentShow = (props: ShowProps) => (
    <Show title={<CommentsTitle/>} {...props}>
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