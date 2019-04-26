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
      <div className="container" id="featuredItems_container">
      <h1>FEATURED ITEMS</h1>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
              alt=""
              src={dummyImg}
            />
            <p>STYLE #</p>

            <p>COMPANY NAME</p>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
            <img className="img-responsive"
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
