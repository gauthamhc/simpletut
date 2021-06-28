import React from "react";
import "./default.scss";
import Header from "./components/Header";
import Homepage from "./components/pages/Homepage";
import Registration from "./components/pages/Registration";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
