import React, { Component } from "react";
import "./ourCompany.scss";

class FooterOurCompany extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footerOurCompany_container">
        <div className="row" id="footerOurCompany_row">
          <h2 id="footerOurCompany_headerTag">OUR COMPANY</h2>
          <div className="col-xs-12 col-sm-12 col-md-12 footerOurCompany_rowChild">
            <a href="">About Us</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerOurCompany_rowChild">
            <a href="">Contact Us</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerOurCompany_rowChild">
            <a href="">Terms of Use</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerOurCompany_rowChild">
            <a href="">Privacy Policy</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerOurCompany_rowChild">
            <a href="">Comments</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerOurCompany_rowChild">
            <a href="">Show Info</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterOurCompany;
