import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Landing from "./landing/index.jsx";
import SignIn from "./signIn/index.jsx";
import BuyerRegisteration from "./BuyerRegisteration/index.jsx";
import CategoryMain from "./CategoryMain";
import CategorySub from "./CategorySub";
import Vendor from "./Vendor";
import Sale from "./sale/index.jsx";
import IndividualVendorLanding from "./IndividualVendorLanding/index.jsx";
import ShoppingCart from "./ShoppingCart/index.jsx";

import CompanyFooter from "./CompanyFooter/index.jsx";
import CompanyHeader from "./CompanyHeader/index.jsx";
import routes from "../routes";

import DummyComponent from "./DummyComponent/index.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      // <Switch>
      //   {routes.map(route => (
      //     <Route key={`route-${route.name}`} {...route} />
      //   ))}
      // </Switch>
      <div>
        <Landing/>
      </div>
    );
  }
}

export default App;