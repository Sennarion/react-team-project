import { createAsyncThunk } from '@reduxjs/toolkit';
import { inctanceAuth } from 'redux/auth/operations';

export const fetchTransactionsSummary = createAsyncThunk(
  'transactions/fetchTransactionsSummary',
  async (query, thunkAPI) => {
    try {
      const res = await inctanceAuth.get('/transactions-summary', query);
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

export const getTransaction = createAsyncThunk(
  'transactions/getTransaction',
  async (_, thunkAPI) => {
    try {
      const res = await inctanceAuth.get('/transactions');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);