import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import foodReducer from './slices/foodSlice';
import basketReducer from './slices/basketSlice';
import { foodsApi } from '~store/api/foodApi';

const rootReducer = combineReducers({
    foodStore: foodReducer,
    basketStore: basketReducer,
    [foodsApi.reducerPath]: foodsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([foodsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
