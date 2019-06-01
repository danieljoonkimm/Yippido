// removeFromCart
const removeFromCart = (id) => (
  {
    type: 'REMOVE_FROM_CART',
    id,
  }
);

export default removeFromCart;