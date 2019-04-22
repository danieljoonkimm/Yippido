import React, { Component } from "react";
import Vendors from './vendors/index.jsx';
import FeaturedItems from './featuredItems/index.jsx';
import "./landing.scss";

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <FeaturedItems/>
      </div>
    );
  }
}

export default Landing;
