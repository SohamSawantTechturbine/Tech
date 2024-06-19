

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
import ViewSalaryslip from './Components/pages/ViewSalaryslip';
import UploadForm from './Components/Views/Try';
import HrandAdminSalaryslipview from './Components/Views/HrandAdminSalaryslipview';

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
    <Route path="/viewsalaryslip" element={<ViewSalaryslip/>}/>
    <Route path="/viewsalaryslip" element={<ViewSalaryslip/>}/>
    <Route path="/hrandadminsalaryslip/:employeeId" element={<HrandAdminSalaryslipview />} />

    <Route path="/try" element={<UploadForm/>}/>
   

  </Routes></BrowserRouter>
  )
}

export default App;
