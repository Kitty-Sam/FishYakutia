import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~constants/baseURL';
import { IFood, setFilteredFoods } from '~store/slices/foodSlice';
import { setOrderNumber } from '~store/slices/basketSlice';
import { setModalType } from '~store/slices/modalSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}` : `${BASE_URL_IOS}`,
    }),
    tagTypes: ['Foods', 'Categories', 'Filter'],
    endpoints: (builder) => ({
        getAllFoods: builder.query<IFood[], void>({
            query: () => 'foods-mobile',
            providesTags: ['Foods'],
        }),

        getAllCategories: builder.query<{ id: number; title: string }[], void>({
            query: () => ({
                url: 'categories',
            }),
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
                    dispatch(setModalType({ type: 'match' }));
                    dispatch(setFilteredFoods([]));
                    return;
                } else {
                    dispatch(setFilteredFoods(filteredFoods));
                }
            },
        }),

        filterFood: builder.mutation<IFood[], { title: string }>({
            query(data) {
                return {
                    url: 'foods/filter-by-title',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: filteredFoods } = await queryFulfilled;
                if (!filteredFoods.length) {
                    dispatch(setModalType({ type: 'match' }));
                    dispatch(setFilteredFoods([]));
                } else {
                    dispatch(setFilteredFoods(filteredFoods));
                }
            },
        }),

        commonFilterFood: builder.mutation<IFood[] | [], { title: string; categoryId: number }>({
            query(data) {
                return {
                    url: 'foods/filter-by-title-and-by-category',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: filteredFoods } = await queryFulfilled;
                if (!filteredFoods.length) {
                    dispatch(setModalType({ type: 'match' }));
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
                    dispatch(setModalType({ type: 'error' }));
                    return;
                } else {
                    dispatch(setOrderNumber(order.id));
                }
            },
        }),
    }),
});

export const { useGetAllFoodsQuery, useGetAllCategoriesQuery, useCreateOrderMutation, useCommonFilterFoodMutation } =
    foodsApi;
