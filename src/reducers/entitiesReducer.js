import {
  SAVE_BRANDS,
  SAVE_CATEGORIES,
  SAVE_ORGANIZATIONS,
  SAVE_PRODUCTS,
  SAVE_STRUCTURES,
  SAVE_USERS,
} from '../actions/entities';

export const initialState = {
  brand: {},
  category: {},
  organization: {},
  product: {},
  structure: {},
  user: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BRANDS:
      return {
        ...state,
        brand: {
          ...state.brand,
          ...action.brand,
        },
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        category: {
          ...state.category,
          ...action.category,
        },
      };
    case SAVE_ORGANIZATIONS:
      return {
        ...state,
        organization: {
          ...state.organization,
          ...action.organization,
        },
      };
    case SAVE_PRODUCTS:
      return {
        ...state,
        product: {
          ...state.product,
          ...action.product,
        },
      };
    case SAVE_STRUCTURES:
      return {
        ...state,
        structure: {
          ...state.structure,
          ...action.structure,
        },
      };
    case SAVE_USERS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
      };

    default:
      return state;
  }
};

export default reducer;
