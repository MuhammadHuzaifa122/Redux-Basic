import { createStore } from "redux";
import { productsList } from "./productsList";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [], // We can add only product id in wishlist
};

const cartAddItems = "cart/addItem";
const cartRemoveItems = "cart/removeItem";
const CartIncreaseItemQuantity = "cart/increaseItemQuantity";

function reducer(state = initialState, action) {
  switch (action.type) {
    case cartAddItems:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case cartRemoveItems:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case CartIncreaseItemQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({
  type: cartAddItems,
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: cartAddItems,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: cartAddItems,
  payload: { productId: 15, quantity: 1 },
});
store.dispatch({
  type: cartAddItems,
  payload: { productId: 6, quantity: 1 },
});
store.dispatch({
  type: cartRemoveItems,
  payload: { productId: 6 },
});
store.dispatch({
  type: CartIncreaseItemQuantity,
  payload: { productId: 12 },
});
console.log(store.getState());
