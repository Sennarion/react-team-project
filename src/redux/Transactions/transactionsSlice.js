import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions } from './transactionsOperations';

const handlePending = state => {
  state.isLoading = true;
  //перенес обнуление ошибки из фулфилд в пендинг, так как при повторении одной и той же ошибки, ошибка в стейте не обнуляется и не срабатівает юзєффект и не показівается тост с ошибкой
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const chartSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTransactions.pending]: handlePending,
    [fetchTransactions.rejected]: handleRejected,
    [fetchTransactions.fulfilled](state, action) {
      state.isLoading = false;
      //перенес обнуление ошибки в пендинг
      state.items = action.payload;
    },
    // [logOut.fulfilled](state) {
    //   state.items = [];
    //   state.error = null;
    //   state.isLoading = false;
    // },
  },
});

export const transactionsReducer = chartSlice.reducer;
