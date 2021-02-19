import React, { FC, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { checkAuth } from '@/utils/checkAuth';

interface PrivateRouteProps extends RouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return checkAuth() ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
