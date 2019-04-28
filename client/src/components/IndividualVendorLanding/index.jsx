import React, { Component } from "react";

import VendorLandingFeaturedItems from "./IndividualVendorFeatured/index.jsx";
import VendorLandingBestSellers from "./IndividualVendorBestSellers/index.jsx";

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
        </div>
      </div>
    );
  }
}

export default VendorLanding;
