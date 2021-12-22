import React from "react";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostCreate, PostEdit, PostList } from "./posts/posts";
import { CommentCreate, CommentEdit, CommentList } from "./comments/comments";
import { UserList, UserEdit } from "./users/users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource 
      name="users" 
      list={UserList} 
      edit={UserEdit} 
    />
    <Resource 
      name="comments"
      list={CommentList}
      create={CommentCreate}
      edit={CommentEdit}
    />
  </Admin>
);

export default App;
