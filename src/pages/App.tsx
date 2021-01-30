import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AddContent from '@/pages/AddContent';
import Feed from '@/pages/Feed';
import Login from '@/pages/Login/Login';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Router>
          <Switch>
            <Route path={'/add'} component={AddContent} />
            <Route exact path={'/'} component={Feed} />
            <Route path={'/login'} component={Login} />
          </Switch>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default hot(module)(App);
