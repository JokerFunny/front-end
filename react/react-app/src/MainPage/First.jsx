import { connect } from "react-redux";
import React, { Component } from "react";

class First extends Component {

  render() {
    const { user } = this.props;
    return (
      <div className="container-fluid">
        <h2>HELLO</h2>
        <p>This is a test text for test REACT app. PLZ don`t bite me..</p>

        <p>You're logged in with React & JWT!!</p>
        <p>Your id is: <strong>{user?.id ?? 'api fail to run'}</strong>.</p>
        <p>Your firstName is: <strong>{user?.firstName ?? 'api fail to run'}</strong>.</p>
        <p>Your lastName is: <strong>{user?.lastName ?? 'api fail to run'}</strong>.</p>
        <p>Your role is: <strong>{user?.role ?? 'api fail to run'}</strong>.</p>
        <p>Your username is: <strong>{user?.username ?? 'api fail to run'}</strong>.</p>
        <p>This page can be accessed by all authenticated users.</p>
        <div>
          Current user from secure api end point:
              {user &&
            <ul>
              <li>{user.firstName} {user.lastName}</li>
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  ({user}) => ({user})
) ( First );