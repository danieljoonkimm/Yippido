import React, { Component } from "react";
import Landing from './landing/index.jsx';
import Register from './register/index.jsx';
import SignIn from './signIn/index.jsx';
import { Link, Route, Switch } from "react-router-dom";
import BuyerRegisteration from './BuyerRegisteration/index.jsx';
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
        {/* <SignIn/> */}
        <Register/>
        {/* <Landing/> */}
        {/* <BuyerRegisteration/> */}
      </div>
    );
  }
}

export default App;
