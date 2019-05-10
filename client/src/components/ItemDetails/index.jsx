import React, { Component } from 'react';

import Product from '../Vendor/Product';
import Reviews from './Reviews';
import DemoCarousel from './DemoCarousel';


import './itemDetail.scss';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="itemDetail">
        <div className="container">
          <div className="row" style={{ padding: '40px 0 20px 0'}}>
            <div className="col-xs-8 col-sm-8 col-md-8">
              {/* <Demo/> */}
              <DemoCarousel/>
              <Reviews/>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <Product/>
            </div>
          </div>    
        </div>
      </div>
    );
  }
}

export default ItemDetail;