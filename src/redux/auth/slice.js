import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { username: null, email: null, balance: 0 },
  token: null,
  isLogged: false,
  isLoading: false,
  error: null,
};

const extraActions = [register, logIn, refreshUser, logOut];
const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogged = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogged = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null, balance: 0 };
        state.token = null;
        state.isLogged = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogged = true;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
        state.error = 'Such a user is already registered';
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
        state.error = 'Invalid e-mail or password. Try again';
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
