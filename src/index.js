import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'modern-normalize/modern-normalize.css';
import { theme } from 'styles/theme';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="react-team-project">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
