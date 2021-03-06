// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { FormsList, FormsEdit, FormsCreate } from "./forms";
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from "./dataProvider";

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="forms" list={FormsList} edit={FormsEdit} create={FormsCreate} icon={UserIcon} />
  </Admin>
)

export default App;