import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const inctanceAuth = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});
const setAuthHeader = token => {
  inctanceAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  inctanceAuth.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await inctanceAuth.post('/auth/sign-up', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await inctanceAuth.post('/auth/sign-in', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/sign-out', async (_, thunkAPI) => {
  try {
    await inctanceAuth.delete('/auth/sign-out');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await inctanceAuth.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
