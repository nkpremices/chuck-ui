/* eslint-disable @typescript-eslint/default-param-last */
import { initialState } from '../initialState';
import { CategoriesActionTypes } from '../actions/types/categories';

export const categoriesReducer = (
  state = initialState.categories,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case CategoriesActionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.category,
        isCategorySelected: action.payload.isCategorySelected,
      };

    default:
      return state;
  }
};
