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
const CartDecreaseItemQuantity = "cart/decreaseItemQuantity";

const WishlistAddItems = "wishList/addItem";
const WishlistRemoveItems = "wishList/removeItem";

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
    case CartDecreaseItemQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        }),
      };

    case WishlistAddItems:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case WishlistRemoveItems:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishListItem) => wishListItem.productId !== action.payload.productId
        ),
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
