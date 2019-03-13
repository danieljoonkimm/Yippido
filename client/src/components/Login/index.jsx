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
    if(this.state.email.length < 1 || this.state.password.length <1) {
      alert('PLEASE ENTER VALID EMAIL OR PASSWORD')
    }
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name] : event.target.value
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
            Email: <input type="text" name="email" onChange={this.handleChange.bind(this)}/><br/>
            Password: <input type="text" name="password" onChange={this.handleChange.bind(this)}/>
          </label>
          <input type="submit" value="Submit" onClick={this.validateForm.bind(this)}/>
        </form>
      </div>
    )
  }
};

export default Login;