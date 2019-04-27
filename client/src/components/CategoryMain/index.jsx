import React, { Component } from 'react';

import CategoryBanner from './CategoryBanner';
import FavoriteVendors from './FavoriteVendors';
import RNVendors from './RNVendors';

import './companyMain.scss';

class CategoryMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="categoryMain" >
        <CategoryBanner/>
        <FavoriteVendors/>
        <RNVendors name={'Recommended'}/>
        <RNVendors name={'New'}/>
      </div>
    );
  }
}

export default CategoryMain;