import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AddContent from '@/pages/AddContent';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import MyPage from '@/pages/MyPage';
import MyPageEdit from '@/pages/MyPageEdit';

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
            <Route path={'/myPage'} component={MyPage} exact />
            <Route path={'/myPage/edit'} component={MyPageEdit} />
          </Switch>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default hot(module)(App);
