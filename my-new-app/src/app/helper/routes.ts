import { PathRouteProps } from 'react-router-dom';
import EmployeePage from '../Components/pages/EmpoloyeePage';
import Login from '../Components/pages/Login';
import HomePage from '../Components/pages/HomePage'
import Profile from '../Components/pages/Profile';
import AllEmployeePage from '../Components/pages/AllEmpoloyeePage';
import Addsalaryslip from '../Components/pages/Addsalaryslip';
import ViewSalarySlipview from '../Components/Views/ViewSalarySlipview';
import ViewSalaryslip from '../Components/pages/ViewSalaryslip';
import HrandAdminSalaryslipview from '../Components/Views/HrandAdminSalaryslipview';
export interface Routes {
  Component: () => JSX.Element;
  key: string;
  path: PathRouteProps['path'];
  layout?: string;
  isPrivate: boolean;
}

const routes: Routes[] = [
  {
    Component: Login,
    key: 'Login',
    path: '/login',
    isPrivate: false,
  },
  {
    Component: HomePage,
    key: 'HomePage',
    path: '/home',
    isPrivate: true,
  },
  {
    Component: EmployeePage,
    key: 'EmployeePage',
    path: '/Addemployee',
    isPrivate: true,
  },  {
    Component: Profile,
    key: 'Profile',
    path: '/profile',
    isPrivate: true,
  },  {
    Component: AllEmployeePage,
    key: 'AllEmployeePage',
    path: '/AllEmployee',
    isPrivate: true,
  },  {
    Component: Addsalaryslip,
    key: 'Addsalaryslip',
    path: '/Addsalaryslip',
    isPrivate: true,
  },  {
    Component: ViewSalaryslip,
    key: 'ViewSalaryslip',
    path: '/viewsalaryslip',
    isPrivate: true,
  }, {
    Component: HrandAdminSalaryslipview,
    key: 'HrandAdminSalaryslipview',
    path: '/hrandadminsalaryslip/:employeeId',
    isPrivate: true,
  },
];
export default routes;
