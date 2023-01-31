import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
  },
});

export const {
  openModalAddTransaction,
  openModalLogout,
  closeModalAddTransaction,
  closeModalLogout,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
