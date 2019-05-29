import React, {Component} from "react";
import PropTypes from 'prop-types';

const GetCartButton = ({ children, cartItems, cartButton }) => {

  const getCartButtonSub = () => (
    <Link to='/shoppingCart' className='cart-button'>
      Cart ({cartItems})
    </Link>
  );

  return (
    <div className='shopping-cart-app'>
      <header className='header'>
        <div className='header-contents'>
          {cartButton ? getCartButtonSub() : "cart"}
        </div>
      </header>
      <main className='main'>
        {children}
      </main>
    </div>
  );
};

GetCartButton.PropTypes = {
  cartItems: PropTypes.number.isRequired,
  backButton: PropTypes.bool.isRequired,
  cartButton: PropTypes.bool.isRequired,
};


export default GetCartButton;