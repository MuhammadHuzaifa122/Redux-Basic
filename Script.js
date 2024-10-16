import { combineReducers, createStore } from "redux";
import CartReducer, {
  cartAddItems,
  CartIncreaseItemQuantity,
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

store.dispatch({
  type: cartAddItems,
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: cartAddItems,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: CartIncreaseItemQuantity,
  payload: { productId: 12 },
});
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
