import React, { Fragment } from "react";

import { 
  List, 
  Datagrid, 
  TextField, 
  EmailField, 
  Edit,
  SimpleForm,
  TextInput,
  Show,
  SimpleShowLayout
} from "react-admin";
import DrawerList from "./resources/comments/DrawerList";

export const UserList: React.FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const UserEdit: React.FC = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextField source="id" />
          <TextInput source="name" />
          <TextInput source="username" />
          <TextInput source="email" />
          <TextInput source="address.street" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" />
      </SimpleForm>
  </Edit>
);

export const UserShow: React.FC = (props: any) => (
  <Fragment>
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </SimpleShowLayout>
    </Show>
    <DrawerList resource="user" resourceId={props.id}/>
  </Fragment>
);