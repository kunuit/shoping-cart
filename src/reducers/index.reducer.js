import { combineReducers } from "redux";
import products from "./products.reducer";
import cart from "./cart.reducer";
import message from "./message.reducer";


const appReducers = combineReducers({
  products,
  cart,
  message,
})

export default appReducers;