import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
    children: JSX.Element;
  }
const PrivateRoute = ({ children }: PrivateRouteProps) => {
 
    const loggedin=localStorage.getItem("Username")
    const location =useLocation();
    return loggedin? (
        children
    ):(
        <Navigate to ={"/"} state={location.pathname}/>
    )
}

export default PrivateRoute
