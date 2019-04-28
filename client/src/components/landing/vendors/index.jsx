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
        <div className="row" id="vendorMain_row">
          <div className="col-xs-4 col-sm-4 col-md-4" id="vendorMain_mainImage">
            <img className="img-responsive" alt="" src={dummyImg} />
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
                <img className="img-responsive img-responsive-left" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src={dummyImg} />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-left" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src={dummyImg} />
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
                <img className="img-responsive img-responsive-left" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src={dummyImg} />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-left" alt="" src={dummyImg} />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src={dummyImg} />
              </div>
            </div>
          </div>
        </div>

        <div className="mainPage_vendors">
          {this.state.vendors.map(vendors => {
            let mappedVendors =<li key={vendors.toString()}><button>{vendors}</button></li>;
            return (<ul>{mappedVendors}</ul>);
          })}
        </div>
      </div>
    );
  }
}

export default Vendors;
