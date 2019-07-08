import React, { Component } from "react";
import "./signInAccount.scss";

class SignInAccount extends Component {
  constructor() {
    super();

    this.state = {};
  }

  convertSignInAccount() {
    const createSignInHeader = "sign in";
    return (
      <div className="row" id="signInAccount">
        <h1 style={{ textTransform: "uppercase" }}>{createSignInHeader}</h1>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          If you have an account with us, please log in.
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form id="login-form" className="form" action="" method="post">
            <div className="form-group">
              <label className="text-info">Email Address:</label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="text-info">Password:</label>
              <br />
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
              />
            </div>

            <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <label className="text-info">
                <span>Remember Me</span>.
                <span>
                  <input id="remember-me" name="remember-me" type="checkbox" />
                </span>
              </label>
              <br />
              <input
                type="submit"
                name="submit"
                id="password"
                className="btn btn-info btn-md"
                value="submit"
              />
            </div>

            <div id="register-link" className="text-right col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <a href="#" className="text-info">
                Forgot Your Password?
              </a>
            </div>

          </form>
        </div>
      </div>
    );
  }

  render() {
    return <div className="container">{this.convertSignInAccount()}</div>;
  }
}

export default SignInAccount;
