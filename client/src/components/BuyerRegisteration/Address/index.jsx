import React, { Component } from 'react';
import './address.scss';
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';


export default class Address extends Component {
  constructor() {
    super();

    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }
 
  render() {
    const { country, region } = this.state;

    return(
      <div className="">
        <div className="container row address_container" id="address_containerId">
          <div className="row buyerRegistration_subtitle">
            <h1>Company Address</h1>
            <p className="col-xs-6"><span className="asterisk">*</span> Required field</p>
            <CountryDropdown
              className="col-xs-6 country"
              value={country}
              onChange={(val) => this.selectCountry(val)} />
          </div>
          <div className="row buyerRegistration_inputField">
            <div className="col-xs-6">Company Name <span className="asterisk">*</span></div>
            <div className="col-xs-6 right">Seller Permit No. <span className="asterisk">*</span></div>
            <input className="col-xs-6 left" type="text" name="firstName" />
            <input className="col-xs-6 right" type="text" name="lastName"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Address <span className="asterisk">*</span></div>
            <input type="text" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div className="col-xs-6">Unit # <span className="asterisk">*</span></div>
            <div className="col-xs-6 right">Zip Code <span className="asterisk">*</span></div>
            <input className="col-xs-6 left" type="text" name="firstName" />
            <input className="col-xs-6 right" type="text" name="lastName"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div className="col-xs-6">City <span className="asterisk">*</span></div>
            <div className="col-xs-6 right">Select State <span className="asterisk">*</span></div>
            <input className="col-xs-6 left" type="text" name="firstName" />
            <input className="col-xs-6 right" type="text" name="lastName"/>
            <span className="col-xs-6 left" id="checkbox1"><input type="checkbox"/><p className="inputField_checkbox"> Check here if same as compnay address</p></span>
            <span className="col-xs-6 right" id="checkbox2"><input type="checkbox"/><p className="inputField_checkbox"> This address is commercial</p></span>
          </div>

        </div>
        <div className=" container row address_container" id="address_containerId2">
          <div className="row buyerRegistration_subtitle">
            <h1>Shipping Address</h1>
            <p className="col-xs-6"><span className="asterisk">*</span> Required field</p>
            <CountryDropdown
              className="col-xs-6 country"
              value={country}
              onChange={(val) => this.selectCountry(val)} />
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Store Name <span className="asterisk">*</span></div>
            <input type="text" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Attention to <span className="asterisk">*</span></div>
            <input type="text" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Address <span className="asterisk">*</span></div>
            <input type="text" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div className="col-xs-6">Unit # <span className="asterisk">*</span></div>
            <div className="col-xs-6 right">Zip Code <span className="asterisk">*</span></div>
            <input className="col-xs-6 left" type="text" name="firstName" />
            <input className="col-xs-6 right" type="text" name="lastName"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div className="col-xs-6">City <span className="asterisk">*</span></div>
            <div className="col-xs-6 right">Select State <span className="asterisk">*</span></div>
            <input className="col-xs-6 left" type="text" name="firstName" />
            <input className="col-xs-6 right" type="text" name="lastName"/>
          </div>
          <div className="row buyerRegistration_inputField">
            <div>Telephone <span className="asterisk">*</span></div>
            <input type="text" className="full"/>
          </div>
          <div className="row buyerRegistration_inputField buyerRegistration_btn_container buyerRegistration_subtitle">
            <button className="col-xs-4 back btn">&#60; Back</button>
            <button className="col-xs-4 reset btn">Reset</button>
            <button className="col-xs-4 next btn">Next ></button>
          </div>
        </div>
      </div>

    )
  }
}
