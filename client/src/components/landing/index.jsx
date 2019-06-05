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
const API_KEY = process.env.apiSecretKey;

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {
    console.log(API_KEY, 'what is this')
    try {
      const landingData = await Promise.all([
        axios.get("http://yippido.com/index.php?route=feed/rest_api/featured", {
          header: {
            'Access-Control-Allow-Origin': '*',
          }
        }),
        axios.get("http://yippido.com/index.php?route=feed/rest_api/bestsellers&limit={limit}", {
          header: {
            'Access-Control-Allow-Origin': '*',
          }
        }),
        axios.get("http://yippido.com/index.php?route=feed/rest_api/latest", {
          header: {
            'Access-Control-Allow-Origin': '*',
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
