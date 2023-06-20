import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFood {
    id: number;
    name: string;
    image: string;
    price: string;
    categoryId: number;
}

export interface ICategory {
    id: number;
    title: string;
}

type FoodState = {
    foods: IFood[];
    categories: ICategory[];
    filteredFoods: IFood[];
    badgeCount: number;
};

const initialState: FoodState = {
    foods: [],
    filteredFoods: [],
    categories: [],
    badgeCount: 0,
};

const foodSlice = createSlice({
    initialState,
    name: 'foodSlice',
    reducers: {
        setAllFoods: (state, action: PayloadAction<IFood[]>) => {
            state.foods = action.payload;
        },

        setFilteredFoods: (state, action: PayloadAction<IFood[]>) => {
            state.filteredFoods = action.payload;
        },

        setAllCategories: (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        },
        setBadgeCount: (state, action: PayloadAction<number>) => {
            state.badgeCount = action.payload;
        },

        addBadgeCount: (state) => {
            state.badgeCount = state.badgeCount + 1;
        },
        removeBadgeCount: (state) => {
            state.badgeCount = state.badgeCount - 1;
        },
        clearBadgeCount: (state) => {
            state.badgeCount = 0;
        },
    },
});

export default foodSlice.reducer;

export const { setAllFoods, setAllCategories, setFilteredFoods, addBadgeCount, removeBadgeCount, clearBadgeCount } =
    foodSlice.actions;
