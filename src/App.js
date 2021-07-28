import React from "react";
import Layout from "./components/layout/Layout";

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Repos from "./pages/Repos";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/repos" exact>
          <Repos />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
