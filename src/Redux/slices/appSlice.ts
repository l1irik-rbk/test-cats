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
  reducers: {
    setSelected: (state, action: PayloadAction<number>) => {
      state.cards.map((card) => {
        if (card.cardID === action.payload) {
          card.status.selected.selected = !card.status.selected.selected;
        }
      });
    },
  },
});

export const { setSelected } = appSlice.actions;
