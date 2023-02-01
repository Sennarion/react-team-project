import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { GlobalFontComponent } from 'fonts/FontStyled';
import Home from './Home/Home';
import Diagram from './Diagram/Diagram';
import Currency from './Currency/Currency';
import { getIsRefreshCurrentUser } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import Loader from './UI/Loader/Loader';
import { selectAuthErrorStatus } from 'redux/auth/selectors';
import { selectTransactionsErrorStatus } from 'redux/transactions/selectors';
import { selectSuccessfulAddition } from 'redux/transactions/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery('(min-width: 768px)');

  const errorAuthStatus = useSelector(selectAuthErrorStatus);
  const errorTransactionsStatus = useSelector(selectTransactionsErrorStatus);
  const successfulAddition = useSelector(selectSuccessfulAddition);
  const isRefreshing = useSelector(getIsRefreshCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const error = errorAuthStatus || errorTransactionsStatus;

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    if (successfulAddition) {
      toast.info(
        `${successfulAddition.type} for the amount ${successfulAddition.amount} was successfully added to the history`
      );
    }
  }, [successfulAddition]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route index element={<Home />} />
                <Route path="diagram" element={<Diagram />} />
                {!isTablet && <Route path="currency" element={<Currency />} />}
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <GlobalStyleComponent />
          <GlobalFontComponent />
          <ToastContainer autoClose={2000} />
        </>
      )}
    </>
  );
};
