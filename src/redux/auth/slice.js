import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { addTransaction } from 'redux/transactions/operations';

const initialState = {
  user: { username: null, email: null, balance: 0 },
  token: null,
  isLogged: false,
  isRefreshUser: false,
  isLoading: false,
  error: null,
};

const extraActions = [register, logIn, refreshUser, logOut];
const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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
      .addCase(refreshUser.pending, state => {
        state.isRefreshUser = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshUser = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogged = true;
        state.isRefreshUser = false;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balanceAfter;
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
