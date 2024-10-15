export const WishlistAddItems = "wishList/addItem";
export const WishlistRemoveItems = "wishList/removeItem";
export default function WishListReducer(state = [], action) {
  switch (action.type) {
    case WishlistAddItems:
      return [...state, action.payload];

    case WishlistRemoveItems:
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
