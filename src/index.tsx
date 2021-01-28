import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/pages/App';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
