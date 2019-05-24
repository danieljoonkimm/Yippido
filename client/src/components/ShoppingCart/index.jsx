import React, { Component } from "react";
import VendorShoppingCartSavedItems from "./VendorShoppingCartSavedItems/index.jsx";

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="container" id="shoppingCart_container" style={{fontSize: "11px"}}>
        <VendorShoppingCartSavedItems/>
      </div>
    );
  }
}

export default ShoppingCart;
