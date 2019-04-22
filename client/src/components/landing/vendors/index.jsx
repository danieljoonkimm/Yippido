import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./vendors.scss";

class Vendors extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>

      <div className="row landingVendors_container">
        <div className="landing_mainImage main">
          <img src={dummyImg} />
        </div>

        <div className="landing_subImages subImg1">
          <img src={dummyImg} />
          <img src={dummyImg} />
        </div>

        <div className="landing_subImages subImg2">
          <img src={dummyImg} />
          <img src={dummyImg} />
        </div>

        <div className="landing_subImages subImg3">
          <img src={dummyImg} />
          <img src={dummyImg} />
        </div>

        <div className="landing_subImages subImg4">
          <img src={dummyImg} />
          <img src={dummyImg} />
        </div>
      </div>
      </div>
    );
  }
}

export default Vendors;
