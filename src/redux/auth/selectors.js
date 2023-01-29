export const getIsLoggedIn = state => state.auth.isLogged;
export const getUsername = state => state.auth.user.username;
export const getIsRefreshCurrentUser = state => state.auth.isRefreshUser;
export const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshCurrentUser,
  getToken,
};

export default authSelectors;
