export interface Store {
  categories: {
    currentCategory: string | null;
    isCategorySelected: boolean;
    backgroundUrl: string | null;
  };
}

export const initialState: Store = {
  categories: {
    currentCategory: null,
    isCategorySelected: false,
    backgroundUrl: null,
  },
};
