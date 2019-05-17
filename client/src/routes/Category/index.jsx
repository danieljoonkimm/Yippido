import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CategoryMain from '../../components/CategoryMain';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <Route path={`/category/:category_name`} component={CategoryMain}/> 
      </div>
    );
  }
}

export default Category;