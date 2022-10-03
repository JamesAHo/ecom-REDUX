import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

// TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
export const reducer = (state, action) => {
  switch (action.type) {
    // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
    // if the action UPDATE_PRODUCTS is called , return a new object with the updated array
    // the new array in this case will be the product
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
    // WHen the UPDATE_CART_QUANTITY action is called , first is to identify the boolean cartOpen to true
    // After cartOpen is true, the cart open will return and map the product quanity then return the new array of products in the cart
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
    // In the REMOVE_FROM_CART case, the data will be filter out as for the remove action
    // the new State object is the quanity of the array after filtered out
    // after filtered out the new state of that current array will be return 
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // TODO: Add a comment describing what the default case is for
    // this is the default state with no action is being added.
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
