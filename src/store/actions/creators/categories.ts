import { CategoriesActionTypes } from '../types/categories';

export const setSelectedCategory = (
  category: string | null,
  isCategorySelected = true,
) => {
  return {
    type: CategoriesActionTypes.SET_SELECTED_CATEGORY,
    payload: {
      category,
      isCategorySelected,
    },
  };
};
