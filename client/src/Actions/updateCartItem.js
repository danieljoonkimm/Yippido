// updateCartItem
const updateCartItem = (id, count) => (
  {
    type: 'UPDATE_CART_ITEM',
    id,
    count,
  }
);

export default updateCartItem;