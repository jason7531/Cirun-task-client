import React, { Suspense } from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

const Login = React.lazy(() => import("./pages/Login"));
const Repos = React.lazy(() => import("./pages/Repos"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
