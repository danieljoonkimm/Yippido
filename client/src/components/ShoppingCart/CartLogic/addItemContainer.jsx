// import PropTypes from "prop-types";
// import React, {Component} from "react";
// import {connect} from "react-redux";
// import getOptionsArray from "./getOptionsArray.jsx";

// const AddItem = ({ id, count, onSubmit }) => {

//   return (
//     <form
//       className='item-add-form'
//       onSubmit={e => {
//         e.preventDefault();
//         onSubmit(e, id);
//       }}
//     >
//       <span className='item-qty-label'>
//         Qty:
//       </span>
//       <select className='item-qty'>
//         {getOptionsArray(count).map(num =>
//           <option
//             key={num}
//             value={num}
//           >
//             {num}
//           </option>
//         )}
//       </select>
//       <button
//         className='item-add-button'
//         type='submit'
//       >
//         Add to cart
//       </button>
//     </form>
//   );
// };

// AddItem.PropTypes = {
//   count: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// const addItemGetSelectedValue = (e) => (
//   e.target.getElementsByClassName('item-qty')[0].value
// );

// const AddItemContainer = connect(
//   (state, ownProps) => (
//     {
//       id: ownProps.id,
//       count: state.stock.find(item => item.id === ownProps.id).count,
//       inCart: state.cart.some(item => item.id === ownProps.id),
//     }
//   ),
//   null,
//   (stateProps, dispatchProps, ownProps) => {
//     const onSubmit = stateProps.inCart ? updateCartItem : addToCart;

//     return Object.assign({}, ownProps, stateProps, dispatchProps, {
//       onSubmit: (e, id) => {
//         dispatchProps.dispatch(onSubmit(id, addItemGetSelectedValue(e)));
//       },
//     });
//   }
// )(AddItem);

// export default AddItemContainer;