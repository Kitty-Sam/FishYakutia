import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~constants/baseURL';
import { IFood } from '~store/slices/foodSlice';

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
        }),

        getAllCategories: builder.query<{ id: number; title: string }[], void>({
            query: () => ({
                url: 'categories',
            }),
        }),
    }),
});

export const { useGetAllFoodsQuery, useGetAllCategoriesQuery } = foodsApi;
