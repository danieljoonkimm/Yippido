import React, { Component } from "react";

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
            <ul className="register_form">
              <li>First Name: <input></input></li>
              <li>Last Name: <input></input></li>
              <li>Your Email: <input></input></li>
              <li>New Password: <input></input></li>
              <li>Confirm Password: <input></input></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Register;
