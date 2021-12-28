import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    BooleanInput,
} from 'react-admin';

export const UserEdit: React.FC = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            <TextInput source="address" />
            <TextInput source="zipcode" />
            <TextInput source="city" />
            <TextInput source="stateAbbr" />
            <TextInput source="birthday" />
            <DateInput source="first_seen" />
            <DateInput source="last_seen" />
            <BooleanInput source="has_ordered" />
            <TextInput source="latest_purchase" />
            <BooleanInput source="has_newsletter" />
            <TextInput source="groups" />
            <DateInput source="nb_commands" />
            <DateInput source="total_spent" />
        </SimpleForm>
    </Edit>
);