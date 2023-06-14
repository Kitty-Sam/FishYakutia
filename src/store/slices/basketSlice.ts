import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IOrder {
    id: number;
    createdAt: any;
    userName: string;
    userPhone: string;
    userAddress: string;
    totalAmount: string;
    orderItems: [
        {
            foodId: number;
            foodCount: number;
        },
    ];
}

export interface IBucket {
    orders: IOrder[];
}

const initialState: IBucket = {
    orders: [],
};

export const basketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: {
        addOrder(state, { payload }: PayloadAction<{ orderItem: IOrder }>) {
            return state;
        },
    },
});

export default basketSlice.reducer;
export const { addOrder } = basketSlice.actions;
