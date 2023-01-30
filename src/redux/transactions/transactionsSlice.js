import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactionsSummary } from 'redux/transactions/operations';

const initialState = {
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
    [fetchTransactionsSummary.pending]: handlePending,
    [fetchTransactionsSummary.rejected]: handleRejected,
    [fetchTransactionsSummary.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
  },
});
export const transactionsReducer = transactionsSlice.reducer;
