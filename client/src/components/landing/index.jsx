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

import axios from "axios";

const nodeEnv = process.env.NODE_ENV;
const apiSecretKey = process.env.apiSecretKey;
const apiURL = process.env.apiURL;

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {
    console.log(process.env, 'what is this')
    try {
      const landingData = await Promise.all([
        axios.get("http://yippido.com/api/rest/featured", {
          header: {
            "X-Oc-Merchant-Id": apiSecretKey,
          }
        }),
        axios.get("http://api.yippido.com/api/bestsellers/limit/{limit}", {
          header: {
            "X-Oc-Merchant-Id": apiSecretKey

          }
        }),
        axios.get("http://api.yippido.com/api/latest", {
          header: {
            "X-Oc-Merchant-Id": apiSecretKey
          }
        })
      ])
      console.log(landingData, "what does this data look like")
    }
    catch(error) {
      console.log(error, "error")
    }
  }

  render() {
    return (
      <div>
        <Vendors />
        <FeaturedItems />
        <HighlightVendors />
        <LookBook />
        <CategoryCollection />
        <Events/>
        <NewVendors/>
        
        {/* <CompanyFooter/> */}
      </div>
    );
  }
}

export default Landing;
