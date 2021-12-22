import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  DateInput,
  EditButton,
  ShowButton
} from "react-admin";

const commentFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="commentId" label="Comment" reference="comments" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
  <DateInput source="start" />,
  <DateInput source="end" />
];

export const CommentList: React.FC = (props) => (
  <List {...props} filters={commentFilters}>
    <Datagrid>
      <TextField source="email" label={"Author"}/>
      <TextField source="postId" label={"Resource"}/>
      <TextField source="name" label={"Created"}/>
      <TextField source="body" label={"Comment"}/>
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const CommentEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="email" label="Author" />
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const CommentCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="commentId" reference="comments">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);