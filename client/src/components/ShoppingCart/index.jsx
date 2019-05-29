import React, { Component } from "react";
import VendorShoppingCartSavedItems from "./VendorShoppingCartSavedItems/index.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ShoppingCartProgress from "./ShoppingCartProgress/index.jsx";
import "react-tabs/style/react-tabs.css";

class ShoppingCart extends Component {
  constructor() {
    super();

    this.tabData = ["Shopping Cart", "Saved Items"];

    this.state = {
      reactSteps: [
        {
          MyShoppingCart: {
            active: true,
            color: "black"
          },
          ShippingPayments: {
            active: false,
            color: "gray"
          },
          Confirmation: {
            active: false,
            color: "gray"
          }
        }
      ]
    };
  }

  constructShoppingCartProgressBar() {
    const {reactSteps} = this.state;

    return reactSteps.map( steps => {
     return Object.keys(steps).map(step => {
       return <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-10 col-sm-10 col-md-10">
                  <img style={{height: "20px", width: "auto"}} src="https://image.flaticon.com/icons/svg/2/2772.svg"/>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10">
                  {step}
                </div>
              </div>
     })
    })
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
        <div className="row"><div className="col-xs-9 col-sm-9 col-md-9" style={{paddingLeft: "0px"}}>{this.constructShoppingCartProgressBar()}</div></div>
        
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
