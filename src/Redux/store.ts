import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { appSlice } from './slices/appSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
