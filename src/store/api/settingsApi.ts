import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~constants/baseURL';
import { ISettings } from '~store/slices/settingsSlice';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}` : `${BASE_URL_IOS}`,
    }),
    tagTypes: ['Settings'],
    endpoints: (builder) => ({
        getSettings: builder.query<ISettings, void>({
            query: () => 'all',
            providesTags: ['Settings'],
        }),
    }),
});

export const { useGetSettingsQuery } = settingsApi;
