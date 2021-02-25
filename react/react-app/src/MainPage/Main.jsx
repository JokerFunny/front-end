import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import { First, Second, Third } from "@/MainPage";
import { AdminPage, LoginPage } from '@/Auth';
import { history, Role } from '@/Auth/_helpers';
import { authenticationService } from '@/Auth/_services';
import { PrivateRoute } from '@/Auth/_components';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null,
        isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin
    }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser &&
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <ul className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link">Wonderfull first tab</Link>
                <Link to="/second" className="nav-item nav-link">The reasond to live on the second tab</Link>
                <Link to="/third" className="nav-item nav-link">Something on the third one</Link>
                {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin page, WTF</Link>}
              </ul>
              <ul className="navbar-nav">
                <a onClick={this.logout} className="nav-item nav-link logoutToRight">Logout</a>
              </ul>
            </nav>
          }
          <div className="jumbotron">
            <div className="container-fluid">
              <div className="row">
                <PrivateRoute exact path="/" component={First} />
                <PrivateRoute exact path="/second" component={Second} />
                <PrivateRoute exact path="/third" component={Third} />
                <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                <Route path="/login" component={LoginPage} />
              </div>
            </div>
          </div>
        </div>
      </Router>
      
    );
  }
}

export { Main };