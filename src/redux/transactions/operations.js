import { createAsyncThunk } from '@reduxjs/toolkit';
import { inctanceAuth } from 'redux/auth/operations';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (query, thunkAPI) => {
    try {
      const res = await inctanceAuth.get('/transactions-summary', query);
      console.log('summary', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await inctanceAuth.get('/transaction-categories');
      console.log('categories', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async newRecord => {
    try {
      const { data } = await inctanceAuth.post('/transactions', newRecord);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async transactionId => {
    try {
      const { data } = await inctanceAuth({
        method: 'DELETE',
        url: `api/transactions/${transactionId}`,
      });

      return data;
    } catch (error) {}
  }
);
