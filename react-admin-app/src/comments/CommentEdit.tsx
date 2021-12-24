import React from "react";
import { SimpleForm, TextInput, Edit } from "react-admin";

const CommentEdit: React.FC = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    )
}

export default CommentEdit;