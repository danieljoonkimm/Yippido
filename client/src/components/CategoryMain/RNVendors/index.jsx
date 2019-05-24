
import React, { Component } from 'react';

import ProductImage from '../../Vendor/ProductImage';

import {withRouter} from "react-router-dom";


import '../CategoryBanner/categoryBanner.scss';
import './vendor.scss';

class RNVendors extends Component {
  constructor(props) {
    super(props);

    this.generateMockData = this.generateMockData.bind(this);
  }

  generateMockData (images) {
    let mock = [];
    
    for (let i = 0; i < images.length; i++) {
      
      if ( images[i].length === 1 && this.props.name !== 'Favorite') {
        mock.push( 
          <div className="col-xs-4 col-sm-4 col-md-4" style={{padding: '5px'}}>
            <ProductImage 
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={images[i]} 
              isViewable={false}
              onClick={() => {this.props.history.push("/individualVendorLanding")}}
            />
          </div>
        );
      } else if ( this.props.name === 'Favorite') {
        mock.push( 
          <div className="col-xs-3 col-sm-3 col-md-3" style={{padding: '5px'}}>
            <ProductImage 
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={images[i]} 
              isViewable={false}
              onClick={() => {this.props.history.push("/individualVendorLanding")}}
            />
          </div>
        );

      } else {
        mock.push( 
          <div className="col-xs-4 col-sm-4 col-md-4" style={{padding: '5px'}}>
            <ProductImage 
              className="col-xs-6 col-sm-6 col-md-6" 
              name={'duo'}
              images={images[i]} 
              isViewable={false}
              onClick={() => {this.props.history.push("/individualVendorLanding")}}
            />
          </div>
        );
      }
    }

    return mock;
  }

  render() {
    
    return (
      <div id="RNVendors">
        <div className="container">
          <h1>{this.props.name} Vendors</h1>
          <div className="row">
            { this.generateMockData(this.props.images) }
          </div>

          <div className="btn-group banner-buttons" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-category">Ashes Belbet</button>
            <div className="separator"></div>
            <button type="button" className="btn btn-category">Zenana</button>
            <div className="separator"></div>
            <button type="button" className="btn btn-category">DoubleZero</button>
          </div>
            
        </div>
      </div>
    );
  }
}

export default withRouter(RNVendors);
