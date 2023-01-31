import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

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
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => {
      state.isModalAddTransactionOpen = false;
      state.isModalLogoutOpen = false;
    }),
});

export const { toggleModalAddTransaction, toggleModalLogout } =
  globalSlice.actions;

export const globalReducer = globalSlice.reducer;
