import React, { FC, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { checkAuth } from '@/utils/checkAuth';

interface PublicRouteProps extends RouteProps {
  children: ReactNode;
}

const PublicRoute: FC<PublicRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return checkAuth() ? <Redirect to={{ pathname: '/' }} /> : children;
      }}
    />
  );
};

export default PublicRoute;
