import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Feed from './Feed';
import AddContent from './AddContent';

const App: FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path={'/add'} component={AddContent} />
          <Route exact path={'/'} component={Feed} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default App;
