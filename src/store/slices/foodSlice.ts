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
};

const initialState: FoodState = {
    foods: [],
    categories: [],
};

const foodSlice = createSlice({
    initialState,
    name: 'foodSlice',
    reducers: {
        setAllFoods: (state, action: PayloadAction<IFood[]>) => {
            state.foods = action.payload;
        },

        setAllCategories: (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        },
    },
});

export default foodSlice.reducer;

export const { setAllFoods, setAllCategories } = foodSlice.actions;
