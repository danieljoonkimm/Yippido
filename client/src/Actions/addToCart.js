// ACTIONS
// addToCart
export const addToCart = (id, count) => (
  {
    type: 'ADD_TO_CART',
    id,
    count,
  }
);