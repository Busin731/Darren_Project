import React, { Fragment } from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Show,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  SimpleShowLayout
} from "react-admin";
import DrawerList from "../comments/DrawerList";

const PostsTitle = (props: any) => {
  const { record } = props;
  return record ? (
      <span>
          {"Posts"}
      </span>
  ) : null;
};

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const PostList: React.FC = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid rowClick="show">
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export const PostEdit: React.FC = (props) => (
  <Edit title={<PostsTitle/>} {...props}>
    <SimpleForm>
      <TextField source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostShow: React.FC = (props: any) => (
    <Fragment>
      <Show title={<PostsTitle/>} {...props}>
          <SimpleShowLayout>
              <TextField source="id" />
              <ReferenceField source="userId" reference="users">
                <TextField source="name" />
                </ReferenceField>
              <TextField source="title" />
              <TextField source="body" />
          </SimpleShowLayout>
      </Show>
      <DrawerList resource="post" resourceId={props.id} />
    </Fragment>
)


