import React, { Component } from "react";
import "./register.scss";

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
    console.log('this is state', this.state)
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit() {
    if(this.state.firstName.length < 1 || this.state.lastName.length < 1 || 
      this.state.email.length < 1 || this.state.confirmEmail.length < 1 ||
      this.state.password.length <1 || this.state.email !== this.state.confirmEmail) {
        alert('SIGN UP ERROR!')
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
              <input onClick={this.onSubmit.bind(this)} type="submit" id="register_submit"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Register;
