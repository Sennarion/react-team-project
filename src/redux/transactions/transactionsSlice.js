import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactionsSummary,
  fetchCategories,
  addTransaction,
  getTransaction,
} from 'redux/transactions/operations';

const initialState = {
  summary: {},
  items: [],
  isLoading: false,
  error: null,
  data: [],
  filteredData: [],
  categories: [],
  transactions: [],
  balanceAfter: 0,
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
  reducers: {
    clearTransactions(state) {
      state.isLoading = false;
      state.error = null;
      state.data = [];
      state.filteredData = [];
      state.categories = [];
      state.transactions = [];
      state.balanceAfter = 0;
    },
  },
  extraReducers: {
    [fetchTransactionsSummary.pending]: handlePending,
    [fetchTransactionsSummary.rejected]: handleRejected,
    [getTransaction.pending]: handlePending,
    [getTransaction.rejected]: handleRejected,

    [fetchTransactionsSummary.fulfilled](state, action) {
      state.isLoading = false;
      state.summary = action.payload;
      state.error = null;
    },
    [addTransaction.fulfilled](state, action) {
      state.transactions.push(action.payload);
      state.balanceAfter = action.payload.balanceAfter;
    },
    [fetchCategories.fulfilled](state, action) {
      state.categories = action.payload;
    },
    [getTransaction.fulfilled](state, action) {
      state.transactions = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { clearTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
