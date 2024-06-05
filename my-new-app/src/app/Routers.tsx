import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from './Components/pages/Login';
// import EmployeePage from './Components/pages/EmpoloyeePage';
import routes from './helper/routes';
import HomePage from './Components/pages/HomePage';

const Routers = () => {
  const location = useLocation();
  // console.log(location.pathname)
  return (
    <Routes>
      {location.pathname === '/' && <Route path="/" element={<Login/>} />}
      {/* {routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={<route.Component />}
        />
      ))} */}
      <Route path="/home" element={<HomePage/>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default Routers;
