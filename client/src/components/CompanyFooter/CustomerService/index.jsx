import React, { Component } from "react";

class FooterCustomerService extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footerCustomerService_container">
        <div className="row" id="footerCustomerService_row">
          <h2>CUSTOMER SERVICE</h2>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Be a Buyer</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Be a Vendor</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Consolidated Shipping</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Return & Exchange</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">Shipping Method & Charges</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <a href="">FAQ</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterCustomerService;
