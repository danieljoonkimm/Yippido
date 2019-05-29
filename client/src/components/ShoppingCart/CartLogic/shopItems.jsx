import React, {Component} from "react";
import PropTypes from "prop-types";


const ShopItem = ({ id, name, price, img }) => (
  <li className={'shop-item shop-item-' + id}>
    <Link to={'/item/' + id}>
      <div className='shop-item-container'>
        <img
          className='shop-item-image'
          src={img}
        />
        <h1 className='shop-item-name'>
          {name}
        </h1>
        <h2 className='shop-item-price'>
          ${price.toFixed(2)}
        </h2>
      </div>
    </Link>
  </li>
);

ShopItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

const ShopItems = ({ items }) => {

  return (
    <ul className='shop-item-list'>
      {items.map(item =>
        <ShopItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      )}
    </ul>
  );
};

ShopItems.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ShopItems;