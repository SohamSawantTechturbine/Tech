import { PathRouteProps } from 'react-router-dom';
import EmployeePage from '../Components/pages/EmpoloyeePage';
import Login from '../Components/pages/Login';

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
    Component: EmployeePage,
    key: 'EmployeePage',
    path: '/employee-page',
    isPrivate: false,
  },
];
export default routes;
