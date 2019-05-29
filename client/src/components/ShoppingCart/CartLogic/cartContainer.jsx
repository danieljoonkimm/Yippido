import React, {Component} from "react";
import CartItems from "./cartItems.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Total from "./total.jsx";
import PayButton from "./payButton.jsx";

const Cart = ({ cart, onQtyChange, onRemoveClick, onPayClick }) => (
  <div className='cart'>
    <h1 className='main-header cart-header'>My Cart</h1>
    <CartItems
      cart={cart}
      onQtyChange={onQtyChange}
      onRemoveClick={onRemoveClick}
    />
    <Total cart={cart} />
    <PayButton onPayClick={onPayClick} />
  </div>
);

Cart.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onPayClick: PropTypes.func.isRequired,
};

const cartGetSelectedValue = (e) => (
  e.target.value
);

const CartContainer = connect(
  (state) => (
    {
      cart: state.cart.map(cartItem => {
        const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
        return {
          id: cartItem.id,
          name: item.name,
          price: item.price,
          img: item.img,
          count: cartItem.count,
          stockCount: item.count,
        };
      }),
    }
  ),
  (dispatch) => (
    {
      onQtyChange: (e, id) => {
        dispatch(updateCartItem(id, cartGetSelectedValue(e)));
      },

      onRemoveClick: (e, id) => {
        e.preventDefault();
        dispatch(removeFromCart(id));
      },

      dispatch: (reducer) => dispatch(reducer),
    }
  ),
  (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
      onPayClick: () =>
        stateProps.cart.map(item => {
          dispatchProps.dispatch(removeStockItem(item.id, item.count));
          dispatchProps.dispatch(removeFromCart(item.id));
        }),
    })
  )
)(Cart);

export default CartContainer;