import SignInRegister from '../components/register';
import SignIn from '../components/signIn';
import Vendor from '../components/Vendor';
import Landing from '../components/landing';
import IndividualVendorLanding from "../components/IndividualVendorLanding";
import BuyerRegisteration from "../components/BuyerRegisteration";

const routes = [
  {
    path: '/',
    name: 'signin',
    exact: true,
    component: SignIn,
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
    path: '/landing',
    name: 'landing',
    exact: true,
    component: Landing,
  },
  {
    path: '/individualvendorlanding',
    name: 'individualvendorlanding',
    exact: true,
    component: IndividualVendorLanding,
  },
  {
    path: '/buyerregistration',
    name: 'buyerregistration',
    exact: true,
    component: BuyerRegisteration,
  }
];

export default routes;