import { createAsyncThunk } from '@reduxjs/toolkit';
import { inctanceAuth } from 'redux/auth/operations';

export const fetchTransactionsSummary = createAsyncThunk(
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
