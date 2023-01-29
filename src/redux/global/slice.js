import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleModalAddTransaction(state) {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
    toggleModalLogout(state) {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
});

export const { toggleModalAddTransaction, toggleModalLogout } =
  globalSlice.actions;

export const globalReducer = globalSlice.reducer;
