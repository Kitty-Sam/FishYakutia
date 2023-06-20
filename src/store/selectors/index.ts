import { RootState } from '~store/store';

export const getAllFoods = (state: RootState) => state.foodStore.foods;
export const getAllCategories = (state: RootState) => state.foodStore.categories;
export const getFilteredFoods = (state: RootState) => state.foodStore.filteredFoods;

//badge
export const getCurrentBadgeCount = (state: RootState) => state.foodStore.badgeCount;

//ordersItems
export const getOrderItems = (state: RootState) => state.basketStore.orderItems;
export const getOrderNumber = (state: RootState) => state.basketStore.orderNumber;
