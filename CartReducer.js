export const cartAddItems = "cart/addItem";
export const cartRemoveItems = "cart/removeItem";
export const CartIncreaseItemQuantity = "cart/increaseItemQuantity";
export const CartDecreaseItemQuantity = "cart/decreaseItemQuantity";

export default function CartReducer(state = [], action) {
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
          cartItems: state.cartItems
            .map((cartItem) => {
              if (cartItem.productId === action.payload.productId) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
              }
              return cartItem;
            })
            .filter((cartItem) => cartItem.quantity > 0),
        };

      default:
        return state;
    }
  }
}
