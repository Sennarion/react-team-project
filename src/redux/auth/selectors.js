import { createSelector } from '@reduxjs/toolkit';

export const getIsLoggedIn = state => state.auth.isLogged;
export const getUsername = state => state.auth.user.username;
export const getIsRefreshCurrentUser = state => state.auth.isRefreshUser;
export const getToken = state => state.auth.token;
export const getUserBalance = state => state.auth.user.balance;
export const getBalanceAfter = state => state.transactions.balanceAfter;

export const selectAuthErrorStatus = state => state.auth.error;

export const getBalance = createSelector(
  [getUserBalance, getBalanceAfter],
  (balance, balanceAfter) => {
    return balanceAfter || balance;
  }
);

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshCurrentUser,
  getToken,
};

export default authSelectors;
