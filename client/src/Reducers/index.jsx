import  {combineReducers} from 'redux';
import cart from "./cart.js";
import cartItem from "./cartItem.js";
import stock from "./stock.js";
import stockItem from "./stockItem.js";

const allReducers = combineReducers({
  cart: cart,
  cartItem: cartItem,
  stock: stock,
  stockItem: stockItem
});

export default allReducers;