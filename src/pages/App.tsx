import React, { FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AddContent from '@/pages/AddStory';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import MyPage from '@/pages/MyPage';
import MyPageEdit from '@/pages/MyPageEdit';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import Album from '@/pages/Album';

import PrivateRoute from '@/routes/PrivateRoute';
import PublicRoute from '@/routes/PublicRoute';
import { checkAuth } from '@/utils/checkAuth';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Router>
          <Switch>
            <PrivateRoute path={'/add'}>
              <AddContent />
            </PrivateRoute>
            <PrivateRoute path={'/album'}>
              <Album />
            </PrivateRoute>
            <PrivateRoute exact path={'/'}>
              <Main />
            </PrivateRoute>
            <PublicRoute path={'/login'}>
              <Login />
            </PublicRoute>
            <PrivateRoute exact path={'/myPage'}>
              <MyPage />
            </PrivateRoute>
            <PrivateRoute exact path={'/myPage/edit'}>
              <MyPageEdit />
            </PrivateRoute>
            <Route
              path={'*'}
              render={() => {
                return checkAuth() ? (
                  <Redirect to={{ pathname: '/' }} />
                ) : (
                  <Redirect to={{ pathname: '/login' }} />
                );
              }}
            />
          </Switch>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default hot(module)(App);
