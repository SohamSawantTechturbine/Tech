import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from './Components/pages/Login';
// import EmployeePage from './Components/pages/EmpoloyeePage';
import routes from './helper/routes';
import HomePage from './Components/pages/HomePage';
import PrivateRoute from './helper/PrivateRoute';

const Routers = () => {
  const location = useLocation();
  // console.log(location.pathname)
  return (
    <Routes>
      {location.pathname === '/' ? (
        <Route path="/" element={<Navigate to={'/login'} replace />} />
      ) : null}
      {routes.map((route) => {
        if (!route?.isPrivate) {
          return (
            <Route
              key={route.key}
              path={route.path as string}
              element={<route.Component />}
            />
          );
        } else {
          return (
            <Route
              key={route.key}
              path={route.path as string}
              element={
                <PrivateRoute>
                  <route.Component />
                </PrivateRoute>
              }
            />
          );
        }
      })}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default Routers;
