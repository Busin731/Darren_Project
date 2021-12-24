import React from "react";

import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import posts from "./posts";
import comments from "./comments";
import users from "./users";
import fakeDataProvider from "ra-data-fakerest";
import db from "./db.json";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// const dataProvider = fakeDataProvider(db);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="users" {...users} />
    <Resource name="comments" {...comments} />
  </Admin>
);

export default App;
