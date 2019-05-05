import React, { Component } from "react";
import Yippido from "../../../public/images/Yippido.png";
import "./companyHeader.scss";
import { CountryDropdown } from 'react-country-region-selector';

class CompanyHeader extends Component {
  constructor() {
    super();

    this.state = { country: ''};
  }

  inputSelect() {
    let input = document.querySelectorAll("input");
    for (var i = 0; i < input.length; i++) {
      input[i].setAttribute(
        input[i].getAttribute("placeholder").length
      );
    }
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  render() {
    const { country } = this.state;
    return (
      <div className="container" id="companyHeader_container">
        <div className="row" id="companyHeader_row">
          <div className="col-xs-3 col-sm-3 col-md-3 companyHeader_img">
            <img src={Yippido} alt="Yippido" style={{ width: "10em" }} />
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 companyHeader_searchBar">
            <div className="row companyHeader_searchbar">
            <div className="col-xs-2 col-sm-2 col-md-2 companyHeader_searchAll">
              <button id="companyHeader_searchButton">All</button>
            </div>
              <div className="col-xs-9 col-sm-9 col-md-9 companyHeader_searchInput">
                <input
                  className="companyHeader_search_input"
                  type="text"
                  name=""
                  placeholder="type vendor name, item description, or style number"
                />
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 companyHeader_searchIcon">
                <a href="#" className="companyHeader_search_icon">
                  <i className="fas companyHeader_fa-search" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 companyHeader_selectCompanyRegister">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
              <CountryDropdown
              placeholder="Select Country"
              className="col-xs-6 country"
              value={country}
              onChange={(val) => this.selectCountry(val)}></CountryDropdown>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <button>Help</button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <button>Register</button>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <button>SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyHeader;
