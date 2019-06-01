// ACTIONS
// addToCart

const addToCart = (id) => {
  console.log(id, 'hi')
  return {
    type: 'ADD_TO_CART',
    id
  }
};

export default addToCart;