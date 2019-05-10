import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CategoryNav from './CategoryNav';
import CategoryBanner from './CategoryBanner';

import RNVendors from './RNVendors';
import NewArrivals from './NewArrivals';

import './companyMain.scss';

class CategoryMain extends Component {
  constructor(props) {
    super(props);

    this.fav = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/ed3462/#fff'},
      ],
    ];

    this.newRecommended = [
      [
        { url: 'https://dummyimage.com/800x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
    ];
  }

  render() {
    const { match } = this.props;

    const category = match.params.category_name;

    return (
      <div id="categoryMain" >
        <CategoryNav category={category}/>
        <CategoryBanner/>
        <RNVendors name={'Favorite'} images={this.fav}/>
        {/* <RNVendors name={'Recommended'} images={this.newRecommended}/> */}
        {/* <RNVendors name={'New'} images={this.newRecommended}/> */}
        <NewArrivals/>
      </div>
    );
  }
}

export default withRouter(CategoryMain);