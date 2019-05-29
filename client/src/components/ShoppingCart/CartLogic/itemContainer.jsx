import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AddItemContainer from "./addItemContainer.jsx";

const Item = ({ id, name, description, price, img }) => (
  <div className={'item item-' + id}>
    <img
      className='item-image'
      src={img}
    />
    <div className='item-details'>
      <h1 className='item-name'>
        {name}
      </h1>
      <h2 className='item-price'>
        ${price.toFixed(2)}
      </h2>
      <p className='item-desc'>
        {description}
      </p>
      <AddItemContainer id={id} />
    </div>
  </div>
);

Item.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

const ItemContainer = connect(
  (state, ownProps) => (
    state.stock.find(item => String(item.id) === ownProps.params.id)
  )
)(Item);

export default ItemContainer;