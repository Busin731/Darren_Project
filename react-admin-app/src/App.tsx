import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import posts from "./resources/posts";
import users from "./resources/users";
import comments from "./resources/comments";
import notifications from "./resources/notifications";
import dataProviderFactory from "./admins/dataProvider";
import { imageSelectReducer } from "./admins/reducers/notificationReducer";

const dataProvider = dataProviderFactory(process.env.REACT_APP_DATA_PROVIDER || "");

const App = () => (
  <Admin
    title="CORE Platform"
    dataProvider={dataProvider}
    customReducers={{
      imageUrl: imageSelectReducer
    }}
  >
    <Resource name="posts" {...posts} />
    <Resource name="users" {...users} />
    <Resource name="comments" {...comments} />
    <Resource name ='notifications' {...notifications}/>
  </Admin>
);

export default App;
