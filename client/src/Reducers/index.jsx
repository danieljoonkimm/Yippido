import  {combineReducers} from 'redux';
import CartReducer from "./cart.js";
import CartItemReducer from "./cartItem.js";
import StockReducer from "./stock.js";
import StockItemReducer from "./stockItem.js";

const allReducers = combineReducers({
  CartReducer: CartReducer,
  CartItemReducer: CartItemReducer,
  StockReducer: StockReducer,
  StockItemReducer: StockItemReducer
});

export default allReducers;