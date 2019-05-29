import React, {Component} from "react";
import Products from "../../Vendor/Product/index.jsx";
import {connect} from "react-router-dom";

const ShopItemsContainer = connect(
  (state) => (
    {
      items: state.stock,
    }
  )
)(Products);

export default ShopItemsContainer;