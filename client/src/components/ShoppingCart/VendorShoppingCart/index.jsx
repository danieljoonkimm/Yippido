import React, { Component } from "react";
import CartContainer from "../CartLogic/cartContainer.jsx";
class VendorShoppingCart extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div>
        <CartContainer/>
      </div>
    )
  }
};

export default VendorShoppingCart;