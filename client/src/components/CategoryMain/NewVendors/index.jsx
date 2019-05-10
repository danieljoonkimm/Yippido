import React, { Component } from 'react';

import ProductImage from '../../Vendor/ProductImage';

import './newVendors.scss';

class NewVendors extends Component {
  constructor(props) {
    super(props);

    this.images = [
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
  }

  generateNewVendors () {
    let mock = [];

    for ( let i = 0; i < 4; i++ ) {
      mock.push(
        <div className="col-xs-3 col-sm-3 col-md-3" style={{padding: '5px'}}>
          <ProductImage 
            className="col-xs-12 col-sm-12 col-md-12" 
            name={'default'}
            images={this.images[i]} 
            isViewable={false}
          />
        </div>
      )
    }

    return mock;
  }

  

  render() {
    return (
      <div id="newVendors">
        <div className="container">
          <h1>NEW VENDORS</h1>
        </div>
        <div className="new__vendors">
          <div className="container">
            <h2>Red Ribbon Rose</h2>
            <div className="row">
              { this.generateNewVendors() }
            </div>
          </div>
        </div>
        <div className="new__vendors__alt">
          <div className="container">
            <h2>Red Ribbon Rose</h2>
            <div className="row">
              { this.generateNewVendors() }
            </div>
          </div>
        </div>
        <div className="new__vendors">
          <div className="container">
            <h2>Red Ribbon Rose</h2>
            <div className="row">
              { this.generateNewVendors() }
            </div>
          </div>
        </div>
        <div className="new__vendors__alt">
          <div className="container">
            <h2>Red Ribbon Rose</h2>
            <div className="row">
              { this.generateNewVendors() }
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default NewVendors;