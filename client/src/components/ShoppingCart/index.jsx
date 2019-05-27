import React, { Component } from "react";
import VendorShoppingCartSavedItems from "./VendorShoppingCartSavedItems/index.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class ShoppingCart extends Component {
  constructor() {
    super();

    this.tabData = ["Shopping Cart", "Saved Items"];

    this.state = {};
  }

  switchTabs() {
    return this.tabData.map(tab => {
      return <Tab className="col-xs-6 col-sm-6 col-md-6">{tab}</Tab>;
    });
  }

  render() {
    return (
      <div
        className="container"
        id="shoppingCart_container"
        style={{ fontSize: "11px" }}
      >
        <Tabs className="row" selectedTabClassName="settings__activeTab">
          <div className="col-xs-3 col-sm-3 col-md-3">
            <TabList>{this.switchTabs()}</TabList>
          </div>
          <TabPanel>
            <VendorShoppingCartSavedItems />
          </TabPanel>
          <TabPanel>
            <VendorShoppingCartSavedItems />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default ShoppingCart;
