import { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Main from "./Component/Main/main";
import Register from "./Component/Register/register";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
