import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./vendors.scss";

class Vendors extends Component {
  constructor() {
    super();

    this.state = {
      vendors: [
        "vendor1",
        "vendor1",
        "vendor1",
        "vendor1",
        "vendor1",
        "vendor1"
      ]
    };
  }
  render() {
    return (
      <div className="container" id="vendorMain_container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4" id="vendor_mainImage">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>
            </div>
          </div>
        </div>

        <div className="mainPage_vendors">
          {this.state.vendors.map(vendors => {
            return <li key="vendors">{vendors}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Vendors;
