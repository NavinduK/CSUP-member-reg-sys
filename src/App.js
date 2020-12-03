import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Main from "./Component/Main/Main";
import Register from "./Component/Register/register";
import Thankyou from "./Component/Thankyou/thankyou";
import AdminLogin from "./Component/AdminLogin/adminlogin";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/adminlogin">
            <AdminLogin />
          </Route>
          <Route path="/thankyou">
            <Thankyou/>
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
