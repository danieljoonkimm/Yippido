import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./featuredItems.scss";

class FeaturedItems extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div class="container">
      <h1>FEATURED ITEMS</h1>
        <div className="row">
          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>
        </div>
        <div className="row">
          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div class="col-xs-3 col-sm-3 col-md-3 image">
            <img
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedItems;
