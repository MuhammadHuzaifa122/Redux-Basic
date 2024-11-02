//action Types
export const WishlistAddItems = "wishList/addItem";
export const WishlistRemoveItems = "wishList/removeItem";
//Action Creator
export function AddWhishlistItem(productId) {
  return {
    type: WishlistAddItems,
    payload: { productId },
  };
}

export function RemoveWishlistItems(productId) {
  return {
    type: WishlistRemoveItems,
    payload: { productId },
  };
}
//Reducer
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
