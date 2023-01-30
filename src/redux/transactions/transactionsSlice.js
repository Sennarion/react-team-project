import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactionsSummary,
  fetchCategories,
  addTransaction,
} from 'redux/transactions/operations';

const initialState = {
  summary: {},
  items: [],
  isLoading: false,
  error: null,
  totalBalance: '',
  data: [],
  filteredData: [],
  categories: [],
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
      state.summary = action.payload;
      state.error = null;
    },
    [addTransaction.fulfilled](state, action) {
      state.data.push(action.payload);
    },
    [fetchCategories.fulfilled](state, action) {
      state.categories = action.payload;
    },
  },
});
export const transactionsReducer = transactionsSlice.reducer;
