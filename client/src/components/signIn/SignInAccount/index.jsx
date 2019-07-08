import React, { Component } from "react";

class SignInAccount extends Component {
  constructor() {
    super();

    this.state = {};
  }

  convertSignInAccount() {
    const createSignInHeader = "sign in";
    return (
      <div className="row">
        <h1 style={{ textTransform: "uppercase" }}>{createSignInHeader}</h1>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          If you have an account with us, please log in.
        </div>

        <div>
          <form id="login-form" className="form" action="" method="post">
            <div className="form-group">
              <label className="text-info">UserName:</label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
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

            <div className="form-group">
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

            <div id="register-link" className="text-right">
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
    return <div>{this.convertSignInAccount()}</div>;
  }
}

export default SignInAccount;
