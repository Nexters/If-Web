import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AddContent from '@/pages/AddContent';
import Main from '@/pages/main';
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
            <Route exact path={'/'} component={Main} />
          </Switch>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default hot(module)(App);
