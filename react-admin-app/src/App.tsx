import React from "react";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import posts from "./posts";
import comments from "./comments";
import users from "./users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="users" {...users} />
    <Resource name="comments" {...comments} />
  </Admin>
);

export default App;
