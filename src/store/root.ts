import { configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

import { AppActions, ExtraThunkArg } from './types';
import apiSlice from './slices/api/slice';
import peopleSlice from './slices/people/slice';

export const store = configureStore({
  reducer: {
    [apiSlice.name]: apiSlice.reducer,
    [peopleSlice.name]: peopleSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<AppState, ExtraThunkArg, AppActions>;

export type AppThunkAction<Result = void> = ThunkAction<Result, AppState, ExtraThunkArg, AppActions>;

export const dispatch = store.dispatch as AppDispatch;
