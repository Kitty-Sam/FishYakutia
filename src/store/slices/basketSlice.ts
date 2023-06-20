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
    orderItems: {
        foodId: number;
        foodCount: number;
        foodImage: string;
        foodPrice: string;
        foodName: string;
    }[];
    orderNumber: number;
}

const initialState: IBucket = {
    orderItems: [],
    orderNumber: 0,
};

export const basketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: {
        addOrderItem(
            state,
            {
                payload,
            }: PayloadAction<{
                orderItem: {
                    foodId: number;
                    foodCount: number;
                    foodImage: string;
                    foodPrice: string;
                    foodName: string;
                };
            }>,
        ) {
            const currentOrder = state.orderItems.find((order) => order.foodId === payload.orderItem.foodId);
            if (currentOrder) {
                currentOrder.foodCount += 1;
            } else {
                state.orderItems = state.orderItems.concat(payload.orderItem);
            }
        },

        removeOrderItem(
            state,
            {
                payload,
            }: PayloadAction<{
                orderItem: { foodId: number; foodCount: number };
            }>,
        ) {
            const currentOrder = state.orderItems.find((order) => order.foodId === payload.orderItem.foodId);
            if (currentOrder) {
                currentOrder.foodCount -= 1;
                if (currentOrder.foodCount === 0) {
                    state.orderItems = state.orderItems.filter((order) => order.foodId !== payload.orderItem.foodId);
                }
            }
        },

        clearBasket(state) {
            state.orderItems = [];
        },

        setOrderNumber(state, action: PayloadAction<number>) {
            state.orderNumber = action.payload;
        },
    },
});

export default basketSlice.reducer;
export const { addOrderItem, removeOrderItem, clearBasket, setOrderNumber } = basketSlice.actions;
