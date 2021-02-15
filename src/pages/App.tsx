import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Router>
          <Switch>
            <Route path={'/add'}>
              <AddContent />
            </Route>
            <Route path={'/album'}>
              <Album />
            </Route>
            <Route exact path={'/'}>
              <Main />
            </Route>
            <Route path={'/login'}>
              <Login />
            </Route>
            <Route exact path={'/myPage'}>
              <MyPage />
            </Route>
            <Route exact path={'/myPage/edit'}>
              <MyPageEdit />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default hot(module)(App);
