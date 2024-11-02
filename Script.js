// Check the working of Redux Toolkit behind the scene using debugger

import { combineReducers, createStore } from "redux";
import CartReducer, {
  CartAddItem,
  cartAddItems,
  CartDecreaseItemQuantity,
  CartIncreaseItemQuantity,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "./CartReducer";
import WishListReducer, {
  WishlistAddItems,
  WishlistRemoveItems,
} from "./WishlistReducer";
import ProductsReducer from "./ProductsReducer";

const reducer = combineReducers({
  products: ProductsReducer,
  cartItems: CartReducer,
  wishList: WishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch(CartAddItem(12));
store.dispatch(CartAddItem(1));
store.dispatch(increaseCartItemQuantity(12));
store.dispatch(decreaseCartItemQuantity(12));
store.dispatch(decreaseCartItemQuantity(12));

store.dispatch({
  type: WishlistAddItems,
  payload: { productId: 18 },
});
store.dispatch({
  type: WishlistAddItems,
  payload: { productId: 11 },
});
store.dispatch({
  type: WishlistRemoveItems,
  payload: { productId: 11 },
});
console.log(store.getState());
