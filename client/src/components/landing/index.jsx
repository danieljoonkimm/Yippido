import React, { Component } from "react";
import dummyImg from "../../../public/images/dummyImg.jpg";
import "./landing.scss";

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="landing">
        <div className="row landing_container">
          <div className="col-xs-12 col-sm-4 col-md-4 landing_images">
            <img src={dummyImg} />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 landing_images">
            <img src={dummyImg} />
            <img src={dummyImg} />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 landing_images">
            <img src={dummyImg} />
            <img src={dummyImg} />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 landing_images">
            <img src={dummyImg} />
            <img src={dummyImg} />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 landing_images">
            <img src={dummyImg} />
            <img src={dummyImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
