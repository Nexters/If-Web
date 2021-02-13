import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AddContent from '@/pages/AddStory';
import Main from '@/pages/Main';
import Login from '@/pages/Login/Login';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import Album from '@/pages/Album';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Router>
          <Switch>
            <Route path={'/add'} component={AddContent} />
            <Route path={'/album'} component={Album} />
            <Route exact path={'/'} component={Main} />
            <Route path={'/login'} component={Login} />
          </Switch>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default hot(module)(App);
