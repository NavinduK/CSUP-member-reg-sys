import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Main from "./Component/Main/Main";
import Register from "./Component/Register/Register";
import Thankyou from "./Component/Thankyou/thankyou";
import AdminLogin from "./Component/AdminLogin/Adminlogin";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Adminlogin">
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
