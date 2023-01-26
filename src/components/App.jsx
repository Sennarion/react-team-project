import { Routes, Route } from 'react-router-dom';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import SharedLayout from './SharedLayout/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import DiagramPage from 'pages/DiagramPage/DiagramPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index path="dashboard" element={<DashboardPage />} />
          <Route path="diagram" element={<DiagramPage />} />
          <Route path="currency" element={<CurrencyPage />} />
        </Route>
      </Routes>

      <GlobalStyleComponent />
    </>
  );
};
