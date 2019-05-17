import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoryMain from '../../components/CategoryMain';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
        <Route path={`/category/:category_name`} component={CategoryMain}/> 
        <Route path={`/:category_name/dailyNew`} component={CategoryMain}/> 
          </Switch>
        
      </div>
    );
  }
}

export default Category;