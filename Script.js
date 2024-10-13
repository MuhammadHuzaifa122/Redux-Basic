import { createStore } from "redux";
import { productsList } from "./productsList";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [], // We can add only product id in wishlist
};

const cartAddItems = "cart/addItem";
const cartRemoveItems = "cart/RemoveItem";
function reducer(state = initialState, action) {
  switch (action.type) {
    case cartAddItems:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({
  type: "cart/addItem",
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: "cart/addItem",
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: "cart/addItem",
  payload: { productId: 15, quantity: 1 },
});
store.dispatch({
  type: "cart/addItem",
  payload: { productId: 6, quantity: 1 },
});
