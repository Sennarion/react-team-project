import { createAsyncThunk } from '@reduxjs/toolkit';
import { inctanceAuth } from 'redux/auth/operations';

export const fetchTransactionsSummary = createAsyncThunk(
  'transactions/fetchTransactionsSummary',
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
  'categories/fetchCategories',
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
  'transactions/addTransaction',
  async newRecord => {
    try {
      const { data } = await inctanceAuth.post('/transactions', newRecord);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
