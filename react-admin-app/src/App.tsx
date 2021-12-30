import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { PostCreate, PostEdit, PostList, PostShow } from "./posts";
import { UserEdit, UserList, UserShow } from "./users";
import comments from "./resources/comments";
import dataProviderFactory from "./admins/dataProvider";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin 
    title="CORE Platform"
    dataProvider={dataProviderFactory(process.env.REACT_APP_DATA_PROVIDER || "")}
  >
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      show={PostShow}
    />
    <Resource 
      name="users" 
      list={UserList} 
      edit={UserEdit} 
      show={UserShow}
    />
    <Resource name="comments" {...comments}/>
  </Admin>
);

export default App;
