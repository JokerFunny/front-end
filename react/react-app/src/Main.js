import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Login from "./Login";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Wonderfull first tab</NavLink></li>
            <li><NavLink to="/second">The reasond to live on the second tab</NavLink></li>
            <li><NavLink to="/third">Something on the third one</NavLink></li>
            <li><NavLink to="/login">Login here???</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={First}/>
            <Route path="/second" component={Second}/>
            <Route path="/third" component={Third}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
