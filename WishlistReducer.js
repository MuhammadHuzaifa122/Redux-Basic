export const WishlistAddItems = "wishList/addItem";
export const WishlistRemoveItems = "wishList/removeItem";
export default function WishListReducer(state = [], action) {
  switch (action.type) {
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
  }
}