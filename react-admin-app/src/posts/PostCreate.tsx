import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate: React.FC = (props) => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate;