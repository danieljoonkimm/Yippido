import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Yippido from "../../../public/images/Yippido.png";
import "./companyHeader.scss";
import { CountryDropdown } from "react-country-region-selector";
import ReactTooltip from "react-tooltip";

const dummyData = [
  "Daniels Company",
  "SeansCompany",
  "HyungMinsCompany",
  "HansCompany",
  "JaysCompany"
];

class CompanyHeader extends Component {
  constructor() {
    super();

    this.state = {
      country: "",
      inputVendor: ""
    };
  }

  vendorDropDown(e) {
    e.map(vendors => {
      return vendors;
    });
  }

  inputSelect() {
    let input = document.querySelectorAll("input");
    for (var i = 0; i < input.length; i++) {
      input[i].setAttribute(input[i].getAttribute("placeholder").length);
    }
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  onTextHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signIn() {
    this.props.history.push("/");
  }

  register() {
    this.props.history.push("/buyerregistration");
  }

  searchVendor() {
    this.props.history.push("/individualvendorlanding");
  }

  render() {
    const { country } = this.state;
    return (
      <div className="container" id="companyHeader_container">
        <div className="col-xs-12 col-sm-6 col-md-3 companyHeader_logo">
          <img src={Yippido} id="companyheader_img"/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6">
          <div className="row" id="companyHeader_row">
            <div className="input-group">
              <div className="dropdown input-group-btn search-panel">
                {
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span id="search_concept">All</span>{" "}
                    <span className="caret" />
                  </button>
                }

                <ul className="dropdown-menu" id="dropdown-menuAllVendors">
                  {dummyData.map(vendor => {
                    return <li>{vendor}</li>;
                  })}
                </ul>
              </div>
              <input
                type="hidden"
                name="search_param"
                value="all"
                id="search_param"
              />
              <input
                onChange={this.onTextHandler.bind(this)}
                type="text"
                className="form-control"
                name="inputVendor"
                placeholder="type vendor name, item description, or style number"
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.searchVendor.bind(this)}>
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="row" id="companyHeader_countryDropDown">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <CountryDropdown
                className="col-xs-6 country"
                id="companyHeader_selectCountry"
                value={country}
                onChange={val => this.selectCountry(val)}
              />
            </div>

            <div
              className="col-xs-6 col-sm-6 col-md-6"
              id="companyheader_selectHelp"
            >
              Help
            </div>
          </div>

          <div className="row" id="companyHeader_registerSignIn">
            <div className="col-xs-6 col-sm-6 col-md-6 companyHeader_signLog">
              <button onClick={this.register.bind(this)}>Register</button>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6 companyHeader_signLog">
              <button id="companyHeader_signInButton" onClick={this.signIn.bind(this)}>SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyHeader);