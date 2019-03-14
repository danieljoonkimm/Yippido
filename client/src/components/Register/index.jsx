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
          FOLLOW template
        </div>
      </div>
    );
  }
}

export default Register;
