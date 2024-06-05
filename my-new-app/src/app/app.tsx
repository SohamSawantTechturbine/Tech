

import { useState } from 'react';
import AddEmployeeView from './Components/Views/AddEmpoloyeeView';
import Updateprofile from './Components/Views/Updateprofile';
import AllEmpoloyeePage from './Components/pages/AllEmpoloyeePage';
import EmployeePage from './Components/pages/EmpoloyeePage';
import HomePage from './Components/pages/HomePage';
import Login from './Components/pages/Login';
import Profile from './Components/pages/Profile';
import Routers from './Routers';
import { Route, Routes, useLocation, Navigate, BrowserRouter } from 'react-router-dom';
import Addsalaryslip from './Components/pages/Addsalaryslip';

export function App() {


  
  return (
  <BrowserRouter>
  <Routes>

    <Route path="/home" element={<HomePage/>} />
    <Route path="/Addemployee" element={<EmployeePage/>}/>
    <Route path="/" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/AllEmployee" element={<AllEmpoloyeePage/>}/>
    <Route path="/Addsalaryslip" element={<Addsalaryslip/>}/>
   

  </Routes></BrowserRouter>
  )
}

export default App;
