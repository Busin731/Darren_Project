import React from 'react';
import { Create, TextInput, SimpleForm, required } from 'react-admin';

const CommentCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="body" multiline validate={required()} />
        </SimpleForm>
    </Create>
);

export default CommentCreate;