import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUsername,
  getIsRefreshCurrentUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshCurrentUser);
  const user = useSelector(getUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};