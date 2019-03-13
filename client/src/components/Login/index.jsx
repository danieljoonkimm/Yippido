import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Email: <input type="text" name="email" /><br/>
            Password: <input type="text" name="password" />
          </label>
          <input type="submit" value="Submit" onClick={this.validateForm.bind(this)}/>
        </form>
      </div>
    )
  }
};

export default Login;