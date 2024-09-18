import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colors: [],
}

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    setColors: (state, {payload}) => {
      state.colors = payload;
    }
  },
  selectors: {
    getColors: (state) => state.colors
  }
})

export const { setColors } = GameSlice.actions;
export const { getColors } = GameSlice.selectors;
export const game = GameSlice.reducer;