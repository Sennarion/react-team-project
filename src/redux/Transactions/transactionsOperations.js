import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTransactions = createAsyncThunk(
  'transactions/transactionsAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/transactions');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
