import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import App from "../App.js";

function MainPage1() {
  return (
    <div>
      <h2>Main Page Content</h2>
      
    </div>
  );
}

function EmailForm() {
  return (
    <div>
      <h2>Email Form Content</h2>
      
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active-link" exact to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="active-link" to="/EmailForm/">
                Email Form
              </NavLink>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/EmailForm/" component={EmailForm} />
            <Route path="/" exact component={MainPage1} />
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

export default AppRouter;
