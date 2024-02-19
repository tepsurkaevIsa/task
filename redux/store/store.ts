import { configureStore } from '@reduxjs/toolkit';
import indicatorsReducer from './redusers/indicatorSlice'; // Предположим, что ваш редюсер находится в файле counterSlice.js
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: indicatorsReducer
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>