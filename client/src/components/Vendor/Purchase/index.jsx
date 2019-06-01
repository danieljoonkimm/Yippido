import React, { Component } from 'react';

import './purchase.scss';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import addToCart from "../../../Actions/addToCart.js";

const Purchase = ( {id, onSubmit} ) => {
  return (
    <div >
      <div id="purchase">
        <ul className="nav nav-pills">
          <li className="active"><a href="#1b" data-toggle="tab">Purchase</a></li>
          <li className=""><a href="#2b" data-toggle="tab">Order Detail</a></li>
        </ul>
        <div className="tab-content clearfix">
          <div className="tab-pane active" id="1b">
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
          </div>
          <div className="tab-pane" id="2b">
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
          </div>
        </div>
      </div>
      <div className="purchase__btn">
        <button className="addToBag" onClick={e => {
        onSubmit(e, id);
      }}>Add To Bag</button>
        <button className="favorite-btn">
        <div className="heart"></div>
        Favorite</button>
      </div>
    </div>
  );
}

Purchase.PropTypes = {
  onClick: PropTypes.func.isRequired,
};

const addItemGetSelectedValue = (e) => (
  console.log(e, 'this is addItemGetSelectedvalue')
);

const AddItemContainer = connect(
  (state, ownProps) => (
    {
      id: ownProps.id,
      // inCart: state.cart.some(item => item.id === ownProps.id),
    }
  ),
  null,
  (stateProps, dispatchProps, ownProps) => {
    const onSubmit = stateProps.inCart ? updateCartItem : addToCart;

    return Object.assign({}, ownProps, stateProps, dispatchProps, {
      onSubmit: (e, id) => {
        dispatchProps.dispatch(onSubmit(id, addItemGetSelectedValue(e)));
      },
    });
  }
)(Purchase);

export default AddItemContainer;

