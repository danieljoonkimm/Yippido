import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";


// Components
import Navigation from './Navigation/';
import Landing from './landing/index.jsx';
import Register from './register/index.jsx';
import SignIn from './signIn/index.jsx';
import BuyerRegisteration from './BuyerRegisteration';
import CategoryMain from './CategoryMain';
import CategorySub from './CategorySub';
import NavTabs from './NavTabs';
import TEST from './TEST/test';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch> */}
        <Navigation />
        <NavTabs />
        {/* <SignIn/>
        <Register/> */}
        {/* <Landing/> */}
        <CategoryMain />
        <CategorySub />
        <TEST />
        {/* <BuyerRegisteration/> */}
      </div>
    );
  }
}

export default App;
