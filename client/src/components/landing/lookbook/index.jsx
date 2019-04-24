import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
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
          <h1>FROM THE LOOK BOOK</h1>
        </div>
        <div className="row" id="lookBook_row">
          <div className="col-xs-4 col-sm-4 col-md-4" id="lookBookMain_mainImage">
            <img className="img-responsive" alt="" src={dummyImg} />
            <p>SAMPLE</p>
            <p>SAMPLE</p>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 lookBookMain_subParent">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
                <img className="img-responsive" alt="" src={dummyImg} />
                <p>SAMPLE</p>
                <p>SAMPLE</p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
                <img className="img-responsive" alt="" src={dummyImg} />
                <div />
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 lookBookMain_subParent">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
                <img className="img-responsive" alt="" src={dummyImg} />
                <p>SAMPLE</p>
                <p>SAMPLE</p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
                <img className="img-responsive" alt="" src={dummyImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LookBook;
