import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { colorTheme } from './utils/ColorTheme';
// import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={colorTheme}>
    {/* <CssBaseline /> */}
    <App />
  </ThemeProvider>
);

reportWebVitals();
