import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions } from 'redux/transactions/operations';

const initialState = {
  categories: [],
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchTransactions.pending]: handlePending,
    [fetchTransactions.rejected]: handleRejected,
    [fetchTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
  },
});
export const transactionsReducer = transactionsSlice.reducer;
