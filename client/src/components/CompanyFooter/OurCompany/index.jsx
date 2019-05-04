import React, { Component } from "react";

class FooterOurCompany extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footerOurCompany_container">
        <div className="row" id="footerOurCompany_row">
          <h2>OUR COMPANY</h2>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">About Us</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Contact Us</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Terms of Use</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Privacy Policy</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Comments</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Show Info</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterOurCompany;
