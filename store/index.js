// Check the working of Redux Toolkit behind the scene using debugger

import { combineReducers, createStore } from "redux";
import CartReducer, {
  CartAddItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "./CartReducer.js";
import WishListReducer, {
  AddWhishlistItem,
  RemoveWishlistItems,
} from "./WishlistReducer.js";
import ProductsReducer from "./ProductsReducer.js";

const reducer = combineReducers({
  products: ProductsReducer,
  cartItems: CartReducer,
  wishList: WishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// console.log(store);

// store.dispatch(CartAddItem(12));
// store.dispatch(CartAddItem(1));

// store.dispatch(increaseCartItemQuantity(12));

// store.dispatch(decreaseCartItemQuantity(12));
// store.dispatch(decreaseCartItemQuantity(12));

// store.dispatch(AddWhishlistItem(18));
// store.dispatch(AddWhishlistItem(11));

// store.dispatch(RemoveWishlistItems(11));
