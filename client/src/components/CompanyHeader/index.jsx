import React, { Component } from "react";
import Yippido from "../../../public/images/Yippido.png";
import "./companyHeader.scss";
import { CountryDropdown } from "react-country-region-selector";

class CompanyHeader extends Component {
  constructor() {
    super();

    this.state = { country: "", inputVendor: "" };
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

  render() {
    const { country } = this.state;
    return (
      <div className="container" id="companyHeader_container">
        <div className="col-xs-3 col-sm-3 col-md-3">
          <img src={Yippido} />
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6">
          <div className="row" id="companyHeader_row">
            <div className="input-group">
              <div className="input-group-btn search-panel">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span id="search_concept">All</span>{" "}
                  <span className="caret" />
                </button>
                <ul>
                  <li>
                    <a href="#contains">Contains</a>
                  </li>
                  <li>
                    <a href="#its_equal">It's equal</a>
                  </li>
                  <li>
                    <a href="#greather_than">Greather than ></a>
                  </li>
                  <li>
                    <a href="#less_than">Less than</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#all">Anything</a>
                  </li>
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
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">Select Country</div>

            <div className="col-xs-6 col-sm-6 col-md-6">Help</div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6"><button>Register</button></div>

            <div className="col-xs-6 col-sm-6 col-md-6">
              <button id="companyHeader_signInButton">SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyHeader;
