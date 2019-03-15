import React, { Component } from "react";
import "./register.scss";

class Register extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="register_container">
        <h1 className="register_header">Sign Up</h1>
        <div className="register_body">
          <h2>It' free and anyone can join</h2>
            <div className="register_info">
              <label>First Name: <input type="text"/></label>
              <label>Last Name: <input type="text"/></label>
              <label>Your Email: <input type="text"/></label>
              <label>Re-enter Email: <input type="text"/></label>
              <label>New Password: <input type="text"/></label>
              <input type="submit" id="register_submit"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Register;
