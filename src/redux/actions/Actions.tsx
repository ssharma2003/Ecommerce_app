import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes";

export const addItemToCart = (data: any) =>({
    data:ADD_TO_CART,
    payload:data
});

export const removeItemFromCart = (index: any) =>({
    data:REMOVE_FROM_CART,
    payload:index
});

export const addToWishlist = (data: any) =>({
    data:ADD_TO_WISHLIST,
    payload:data
});

export const removeFromWishlist = (index: any) =>({
    data:REMOVE_FROM_WISHLIST,
    payload:index
});