import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AlbumList from '@/components/AlbumList';
import AlbumFeedList from '@/components/AlbumFeedList';

const Album: FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <AlbumList />
      </Route>
      <Route path={`${path}/:name`}>
        <AlbumFeedList />
      </Route>
    </Switch>
  );
};

export default Album;
