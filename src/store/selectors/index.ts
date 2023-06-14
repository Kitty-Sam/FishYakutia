import { RootState } from '~store/store';

export const getAllFoods = (state: RootState) => state.foodStore.foods;
export const getAllCategories = (state: RootState) => state.foodStore.categories;
