import React, { Component } from 'react';
import './personalInformation.scss';
import ReactTelephoneInput from 'react-telephone-input';

export default class PersonalInformation extends Component {
  constructor () {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      telNumber: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  handleInput(e) {
    // console.log(this.state.firstName)
    this.setState({
      firstName: e.target.firstName
    })
    console.log(e.target.firstName)
  }
  handleInputChange(telNumber, selectedCountry) {
    console.log('input changed. number: ', telNumber, 'selected country: ', selectedCountry)
  }
  handleInputBlur(telNumber, selectedCountry) {
    console.log(
      'Focus off the ReactTelephoneInput component. Tel number entered is: ',
      telNumber,
      ' selected country is: ',
      selectedCountry
    )
  }
  render() {
    return (
      <div className="container personalInfo_container">
        <div className="buyerRegistration_subtitle">
          <h1>Personal Information</h1>
          <p><span className="asterisk">*</span> Required field</p>
        </div>
        <form action="">
          <div className="row buyerRegistration_inputField">
            <div className="col-xs-6 left">First Name <span className="asterisk">*</span></div>
            <div className="col-xs-6 right">Last Name <span className="asterisk">*</span></div>
            <input className="col-xs-6 left" type="text" name="firstName" onChange={this.handleInput}/>
            <input className="col-xs-6 right" type="text" name="lastName"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Email Address <span className="asterisk">*</span></div>
            <input type="email" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Password <span className="asterisk">*</span></div>
            <input type="password" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Phone Number <span className="asterisk">*</span></div>
            {/* <input type="tel" className="full"/> */}
            <ReactTelephoneInput
              defaultCountry="us"
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
            />
          </div>
          <div className="row buyerRegistration_inputField buyerRegistration_btn_container buyerRegistration_subtitle">
            <div className="col-xs-4"></div>
            <button className="col-xs-4 col-md-4 reset btn">Reset</button>
            <button className="col-xs-4 col-md-4 next btn">Next ></button>
          </div>
        </form>
      </div>
    )
  }
};

// row
// <div className="col-xs-6">
//   <div> flex justify-content center
//     First Name
//   </div>
//   <div>
//     <input></input>
//   </div>
// </div>