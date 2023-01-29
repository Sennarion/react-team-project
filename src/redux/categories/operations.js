import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
  
  export const getCategories = createAsyncThunk(
    'categories/load',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/categories');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message
        );
      }
    }
  );