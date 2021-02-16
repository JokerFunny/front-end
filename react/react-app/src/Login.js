import React from "react";

function Login() {
  return (
    <div className="login-page">
      <h2>Login In ( TBD ( no :) ) )</h2>
      <form autoComplete="off">
        <div className="form-group"> 
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;