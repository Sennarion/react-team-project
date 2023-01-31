import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactionsSummary,
  fetchCategories,
  addTransaction,
  getTransaction,
} from 'redux/transactions/operations';
import { logOut } from 'redux/auth/operations';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  filteredData: [],
  categories: [],
  transactions: [],
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
    [getTransaction.pending]: handlePending,
    [getTransaction.rejected]: handleRejected,

    [fetchTransactionsSummary.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [addTransaction.fulfilled](state, action) {
      state.data.push(action.payload);
    },
    [fetchCategories.fulfilled](state, action) {
      state.categories = action.payload;
    },
    [logOut.fulfilled](state) {
      state.error = null;
      state.data = [];
      state.filteredData = [];
      state.categories = [];
    },
    [getTransaction.fulfilled](state,action){
      state.transactions = action.payload;
      state.isLoading = false;
      state.error = null;
    }
  },
});
export const transactionsReducer = transactionsSlice.reducer;
