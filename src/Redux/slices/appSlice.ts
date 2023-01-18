import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CARDS } from '../../helpers/constants';
import { ICard } from '../../types';

export interface IApp {
  cards: ICard[];
}

const initialState: IApp = {
  cards: CARDS,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;
