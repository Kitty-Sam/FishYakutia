import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~constants/baseURL';
import { IFood, setAllCategories, setAllFoods, setFilteredFoods } from '~store/slices/foodSlice';
import { IOrder, setOrderNumber } from '~store/slices/basketSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}` : `${BASE_URL_IOS}`,
    }),
    tagTypes: ['Foods'],
    endpoints: (builder) => ({
        getAllFoods: builder.query<IFood[], void>({
            query: () => 'foods',
            providesTags: ['Foods'],

            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: foods } = await queryFulfilled;
                dispatch(setAllFoods(foods));
            },
        }),

        getAllOrders: builder.query<IOrder[], void>({
            query: () => 'orders',
        }),

        getAllCategories: builder.query<{ id: number; title: string }[], void>({
            query: () => ({
                url: 'categories',
            }),
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: categories } = await queryFulfilled;
                dispatch(setAllCategories([{ id: 0, title: 'Все' }, ...categories]));
            },
        }),

        filterFoodByCategoryId: builder.mutation<IFood[], { categoryId: number }>({
            query(data) {
                return {
                    url: 'foods/filter-by-category-id',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: filteredFoods } = await queryFulfilled;
                if (!filteredFoods.length) {
                    console.log('match is absent');
                    // dispatch(setModalType({ type: 'match' }));
                } else {
                    dispatch(setFilteredFoods(filteredFoods));
                }
            },
        }),

        createOrder: builder.mutation<
            any,
            {
                userName: string;
                userAddress: string;
                userPhone: string;
                paymentMethod: string;
                comment: string;
                totalAmount: string;
                orderItems: { foodId: number; foodCount: number }[];
            }
        >({
            query(data) {
                return {
                    url: 'create-order',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: order } = await queryFulfilled;
                if (!order) {
                    console.log('match is absent');
                    // dispatch(setModalType({ type: 'match' }));
                } else {
                    dispatch(setOrderNumber(order.id));
                }
            },
        }),
    }),
});

export const {
    useGetAllFoodsQuery,
    useGetAllCategoriesQuery,
    useFilterFoodByCategoryIdMutation,
    useCreateOrderMutation,
} = foodsApi;
