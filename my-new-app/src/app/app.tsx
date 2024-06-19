import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from './Components/Context/Themcontext';
import { ModalProvider } from './Components/utils/modalprovider';
import AddEmployeeView from './Components/Views/AddEmpoloyeeView';
import Updateprofile from './Components/Views/Updateprofile';
import AllEmpoloyeePage from './Components/pages/AllEmpoloyeePage';
import EmployeePage from './Components/pages/EmpoloyeePage';
import HomePage from './Components/pages/HomePage';
import Login from './Components/pages/Login';
import Profile from './Components/pages/Profile';
import Addsalaryslip from './Components/pages/Addsalaryslip';
import ViewSalaryslip from './Components/pages/ViewSalaryslip';
import UploadForm from './Components/Views/Try';
import HrandAdminSalaryslipview from './Components/Views/HrandAdminSalaryslipview';
import store from './Store/store'; // Ensure the path is correct
import Routers from './Routers';
import UpdateProfile from './Components/Views/Updateprofile';
import AddSalarypage from './Components/pages/AddSalarypage';
import Salarypage from './Components/pages/Salarypage';
import SalaryView from './Components/Views/SalaryView';

const App = () => {
  return (
    //<Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <BrowserRouter>
            <ConfigProvider>
               <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/Addemployee" element={<EmployeePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/AllEmployee" element={<AllEmpoloyeePage />} />
                <Route path="/Addsalaryslip" element={<Addsalaryslip />} />
                <Route path="/viewsalaryslip" element={<ViewSalaryslip />} />
                <Route path="/hrandadminsalaryslip/:employeeId" element={<HrandAdminSalaryslipview />} />
                <Route path="/try" element={<UploadForm />} />
                <Route path="/AddEmployeeView" element={<AddEmployeeView />} />
               <Route path="/addsalary" element={<AddSalarypage/>}/>
               <Route path="/salarypage/:employeeId" element={<Salarypage/>}/>
               {/* <Route path="/salaryview/:employeeId" element={<SalaryView/>}/> */}
              </Routes> 
              {/* <Routers/> */}
            </ConfigProvider>
          </BrowserRouter>
        </ModalProvider>
      </ThemeProvider>
  //  </Provider>
  );
};

export default App;
