import React, { Component } from "react";
import { userService, authenticationService } from '@/Auth/_services';

class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      userFromApi: null
    };
  }

  componentDidMount() {
    const { currentUser } = this.state;
    userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
  }

  render() {
    const { currentUser, userFromApi } = this.state;
    return (
      <div className="container-fluid">
        <h2>HELLO</h2>
        <p>This is a test text for test REACT app. PLZ don`t bite me..</p>

        <p>You're logged in with React & JWT!!</p>
        <p>Your role is: <strong>{currentUser.role}</strong>.</p>
        <p>This page can be accessed by all authenticated users.</p>
        <div>
          Current user from secure api end point:
              {userFromApi &&
            <ul>
              <li>{userFromApi.firstName} {userFromApi.lastName}</li>
            </ul>
          }
        </div>
      </div>
    );
  }
}

export { First };