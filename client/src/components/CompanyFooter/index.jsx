import React, { Component } from "react";
import FooterVastETech from "./VastETech/index.jsx";
import FooterOurCompany from "./OurCompany/index.jsx";
import FooterCustomerService from "./CustomerService/index.jsx";
import FooterMyAccount from "./MyAccount/index.jsx";
import FooterSubscribeDownload from "./SubscribeDownload/index.jsx";
import "./companyFooter.scss";

class CompanyFooter extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container" id="companyFooter_container">
        <div className="row" id="companyFooter_row">
          <div className="col-xs-12 col-sm-3 col-md-3">
            <FooterVastETech />
          </div>

          <div className="col-xs-12 col-sm-2 col-md-2">
            <FooterOurCompany />
          </div>

          <div className="col-xs-12 col-sm-2 col-md-2">
            <FooterCustomerService />
          </div>

          <div className="col-xs-12 col-sm-2 col-md-2">
            <FooterMyAccount />
          </div>

          <div className="col-xs-12 col-sm-3 col-md-3">
            <FooterSubscribeDownload />
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyFooter;