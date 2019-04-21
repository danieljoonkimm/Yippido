import React, { Component } from "react";
import "./signIn.scss";
import topdeals from "../../../public/images/topdeals.jpeg";

class signIn extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="row signIn">
        <div className="col-xs-12 col-sm-6 signIn_container" id="signIn_signIn">
          <div className="header">
            <h1>Sign In</h1>
            <div className="signIn_text">
              <p>If you have an account with us, please log in.</p>
            </div>
          </div>
          <form>
            <label>
              Email Address:
              <br />
              <input type="text" name="name" />
            </label>
            <label>
              Password:
              <br />
              <input type="text" name="password" />
            </label>
            <label>
              <input type="checkbox" /> Remember Me{" "}
              <button>Forgot Your Password?</button>
            </label>
            <label />
            <input type="submit" value="SIGN IN" id="signIn" />
          </form>
        </div>

        <div
          className="row col-xs-12 col-sm-6 signIn_container"
          id="signIn_create"
        >
          <div className="row header">
            <h1>Create Account</h1>
            <div className="signIn_text">
              <p>
                Register is free for buyers. Join Perfitii.com right now and
                your purchasing is just one-click away. Instead of visiting one
                single store online, you can visit all online stores of your
                favorite vendors and order in the convenience of your home or
                office.
              </p>
            </div>
            <div className="signIn_img">
              <div>
                <img src={topdeals} alt="" />
                <img />
              </div>
              <div>
                <img src={topdeals} alt="" />
                <img />
              </div>
              <div>
                <img src={topdeals} alt="" />
                <img />
              </div>
              <div>
                <img src={topdeals} alt="" />
                <img />
              </div>
            </div>
            <form>
              <input type="submit" value="CREATE ACCOUNT" id="signIn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default signIn;
