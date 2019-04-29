import React, { Component } from "react";
import "./individualVendorLanding.scss";

import VendorLandingFeaturedItems from "./IndividualVendorFeatured/index.jsx";
import VendorLandingBestSellers from "./IndividualVendorBestSellers/index.jsx";
import VendorLandingNewArrivals from "./IndividualVendorNewArrivals/index.jsx";

import IndividualVendorAllItems from "./IndividualVendorAllItems/index.jsx";

class VendorLanding extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container" id="vendorLanding_container">
        <div className="row" id="vendorLanding_row">
          <VendorLandingFeaturedItems />
          <VendorLandingBestSellers />
          <VendorLandingNewArrivals />
        </div>
      </div>
    );
  }
}

export default VendorLanding;
