import React, { Component } from "react";
import "./myAccount.scss";

class FooterMyAccount extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footerMyAccount_container">
        <div className="row" id="footerMyAccount_row">
          <h2>MY ACCOUNT</h2>
          <div className="col-xs-12 col-sm-12 col-md-12 footerMyAccount_rowChild">
            <a href="">Register</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerMyAccount_rowChild">
            <a href="">My Information</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerMyAccount_rowChild">
            <a href="">Order History</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerMyAccount_rowChild">
            <a href="">My Favorites</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerMyAccount_rowChild">
            <a href="">Vendor Rating</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterMyAccount;
