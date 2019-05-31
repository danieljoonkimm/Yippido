import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import routes from '../routes';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
      <Switch>
        {routes.map(route => (
          <Route key={`route-${route.name}`} {...route} />
        ))}
      </Switch>
      </div>

    );
  }
}

export default App;