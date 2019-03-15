import React, { Component } from "react";
import "./register.scss";
import axios from 'axios';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: ''
    };
  }

  textHandler(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  //this is email handler, this checks to see if email is
  emailHandler(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email)) {
      this.setState({
        email: email
      });
    }
    else {
      alert('EMAIL IS INVALID!')
    }
  }

  onSubmit() {
    if(this.state.firstName.length < 1 || this.state.lastName.length < 1 || 
      this.state.email.length < 1 || this.state.confirmEmail.length < 1 ||
      this.state.password.length <1 || this.state.email !== this.state.confirmEmail) {
        alert('SIGN UP ERROR!')
      }
      else {
        alert('SIGN UP SUCCESSFUL!')
      }
  }

  render() {
    return (
      <div className="register_container">
        <h1 className="register_header">Sign Up</h1>
        <div className="register_body">
          <h2>It' free and anyone can join</h2>
            <div className="register_info">
              <label onChange={this.textHandler.bind(this)}>First Name: <input type="text" name="firstName"/></label>
              <label name="lastName" onChange={this.textHandler.bind(this)}>Last Name: <input type="text" name="lastName"/></label>
              <label name="email" onChange={this.textHandler.bind(this)}>Your Email: <input type="text" name="email"/></label>
              <label name="confirmEmail" onChange={this.textHandler.bind(this)}>Re-enter Email: <input type="text" name="confirmEmail"/></label>
              <label name="password" onChange={this.textHandler.bind(this)}>New Password: <input type="password" name="password"/></label>
              <input onClick={this.onSubmit.bind(this)} type="submit" id="register_submit"/><buttton>Login</buttton>
            </div>
        </div>
      </div>
    );
  }
}

export default Register;
