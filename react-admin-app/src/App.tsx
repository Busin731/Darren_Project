import React from "react";

import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostCreate, PostEdit, PostList } from "./posts";
import { UserList } from "./users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource name="users" list={UserList} edit={EditGuesser} />
  </Admin>
);

export default App;
