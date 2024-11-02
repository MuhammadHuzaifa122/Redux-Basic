//Action Types
const cartAddItems = "cart/addItem";
const cartRemoveItems = "cart/removeItem";
const CartIncreaseItemQuantity = "cart/increaseItemQuantity";
const CartDecreaseItemQuantity = "cart/decreaseItemQuantity";

//Action Creators
export function decreaseCartItemQuantity(productId) {
  return {
    type: CartDecreaseItemQuantity,
    payload: { productId },
  };
}
export function increaseCartItemQuantity(productId) {
  return {
    type: CartIncreaseItemQuantity,
    payload: { productId },
  };
}
export function CartAddItem(productId, quantity = 1) {
  return {
    type: cartAddItems,
    payload: { productId, quantity },
  };
}

export function CartRemoveItem(productId, quantity = 1) {
  return {
    type: cartRemoveItems,
    payload: { productId },
  };
}
//Reducers
export default function CartReducer(state = [], action) {
  switch (action.type) {
    case cartAddItems:
      return [...state, action.payload];

    case cartRemoveItems:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );
    case CartIncreaseItemQuantity:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

    case CartDecreaseItemQuantity:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
