import { createStore } from "redux";
import { productsList } from "./productsList";
const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [], // We can add only product id in wishlist
};

function reducer(state = initialState, action) {}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);
