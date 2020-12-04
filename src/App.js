import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Component/Main/Main";
import Register from "./Component/Register/Register";
import Thankyou from "./Component/Thankyou/Thankyou";
import AdminLogin from "./Component/AdminLogin/Adminlogin";
import AdminPanel from "./Component/AdminPanel/AdminPanel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <AdminLogin />
          </Route>
          <Route path="/done">
            <Thankyou/>
          </Route>
          <Route path="/dashboard">
            <AdminPanel/>
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
