import React, { Component } from "react";
import "./customerService.scss";

class FooterCustomerService extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footerCustomerService_container">
        <div className="row" id="footerCustomerService_row">
          <h2 id="footerCustomerService_headerTag">CUSTOMER SERVICE</h2>
          <div className="col-xs-12 col-sm-12 col-md-12 footerCustomerService_rowChild">
            <a href="">Be a Buyer</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerCustomerService_rowChild">
            <a href="">Be a Vendor</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerCustomerService_rowChild">
            <a href="">Consolidated Shipping</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerCustomerService_rowChild">
            <a href="">Return & Exchange</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerCustomerService_rowChild">
            <a href="">Shipping Method & Charges</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 footerCustomerService_rowChild">
            <a href="">FAQ</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterCustomerService;
