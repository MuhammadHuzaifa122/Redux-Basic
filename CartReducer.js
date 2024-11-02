//Action Types
export const cartAddItems = "cart/addItem";
export const cartRemoveItems = "cart/removeItem";
export const CartIncreaseItemQuantity = "cart/increaseItemQuantity";
export const CartDecreaseItemQuantity = "cart/decreaseItemQuantity";

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
