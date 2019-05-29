import React, {Component} from "react";
import GetCartButton from "./getCartButton.jsx";


const ShowCartButton = (pathname) => (
  !pathname.includes('cart') ? true : false
);

const GetCartButtonContainer = connect(
  (state, ownProps) => (
    {
      children: ownProps.children,
      cartItems: state.cart.length,
      backButton: showBackButton(ownProps.location.pathname),
    cartButton: showCartButton(ownProps.location.pathname),
    }
  )
)(GetCartButton);

export default ShowCartButton;