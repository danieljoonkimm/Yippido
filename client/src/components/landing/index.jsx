import React, { Component } from "react";
import Vendors from "./vendors/index.jsx";
import FeaturedItems from "./featuredItems/index.jsx";
import HighlightVendors from "./highlightVendors/index.jsx";
import LookBook from "./lookbook/index.jsx";
import CategoryCollection from "./categoryCollection/index.jsx";
import Events from "./events/index.jsx";
import NewVendors from "./newVendors/index.jsx";
import CompanyHeader from "../CompanyHeader/index.jsx";
import "./landing.scss";

import CompanyFooter from "../CompanyFooter/index.jsx";

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <CompanyHeader/> */}
        {/* <Vendors /> */}
        <FeaturedItems />
        {/* <HighlightVendors /> */}
        {/* <LookBook /> */}
        {/* <CategoryCollection /> */}
        {/* <Events/> */}
        {/* <NewVendors/> */}
        
        <CompanyFooter/>
      </div>
    );
  }
}

export default Landing;
