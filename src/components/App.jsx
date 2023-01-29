import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { GlobalFontComponent } from 'fonts/FontStyled';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/HomePage/HomePage';
import Home from './Home/Home';
import Diagram from './Diagram/Diagram';
import Currency from './Currency/Currency';
import { useAuth } from 'hooks/useUserAuth';
import { refreshUser } from 'redux/auth/operations';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isTablet = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <div>Loading...</div>
      ) : (
        <>
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

          <GlobalStyleComponent />
          <GlobalFontComponent />
        </>
      )}
    </>
  );
};
