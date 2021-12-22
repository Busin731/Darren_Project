import React from "react";

import { 
  List, 
  Datagrid, 
  TextField, 
  EmailField,
  SimpleForm,
  Edit,
  TextInput
} from "react-admin";
import { Aside } from "../comments/aside";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
      height: '100%',
      position: 'sticky',
      top: '10px'
  },
});

export const UserList: React.FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
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

export const UserEdit: React.FC = (props) => (
  <Edit {...props} 
    aside={<Aside />}
    classes={useStyles()}
  >
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <EmailField source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
)

