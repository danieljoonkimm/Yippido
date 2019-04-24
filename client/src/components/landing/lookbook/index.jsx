import React, { Component } from "react";
import lookbook from "../../../../public/images/lookbook.png";
import lookbook1 from "../../../../public/images/lookbook1.png";
import "./lookbook.scss";

class LookBook extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="container" id="lookBookVendors_container">
        <div className="row">
        <h1>FROM THE LOOKBOOK</h1>
        <button>More</button>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <img className="img-responsive" alt="" src={lookbook} />
              <div>
                <p>SAMPLE</p>
                <p>SAMPLE</p>
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={lookbook1} />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={lookbook1} />
                <div />
              </div>
              <div>
                <p>SAMPLE</p>
                <p>SAMPLE</p>
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={lookbook1} />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive" alt="" src={lookbook1} />
              </div>
              <div>
                <p>SAMPLE</p>
                <p>SAMPLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LookBook;
