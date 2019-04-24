import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./highlightVendors.scss";

class HighlightVendors extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="container" id="highlightVendors_container">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <img className="img-responsive" alt="" src={dummyImg} />
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3">
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

          <div className="col-xs-3 col-sm-3 col-md-3">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <img className="img-responsive" alt="" src={dummyImg} />
            </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3">
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
      </div>
    );
  }
}

export default HighlightVendors;
