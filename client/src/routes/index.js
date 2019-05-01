import SignInRegister from '../components/register';
import signIn from '../components/signIn';
import Vendor from '../components/Vendor';
import Landing from '../components/landing';

const routes = [
  {
    path: '/signin',
    name: 'signin',
    exact: true,
    component: signIn,
  },
  {
    path: '/register',
    name: 'register',
    exact: true,
    component: SignInRegister,
  },
  {
    path: '/vendor',
    name: 'vendors',
    exact: true,
    component: Vendor,
  },
  {
    path: '/',
    name: 'landing',
    exact: true,
    component: Landing,
  },
];

export default routes;