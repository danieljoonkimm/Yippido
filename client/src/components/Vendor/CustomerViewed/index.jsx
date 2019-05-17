import React, { Component } from 'react';

import ProductImage from '../ProductImage';

import './customerViewed.scss';

class CustomerViewed extends Component {
  constructor(props) {
    super(props);
  }

  generateMockData (images) {
    let mockData = [];

    for ( let i = 0; i < images.length; i++ ) {
      let model = `${String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()}${Math.floor(Math.random()*90000) + 10000}`;
      let price = `${(Math.random() * 20 + 10).toFixed(2)}`

      mockData.push(
        <div key={i  + 'customer view'} className="customerViewed__vendor col-xs-4 col-sm-4 col-md-4" style={{ padding: '5px'}}>
          <ProductImage  name="duo" className="col-xs-6 col-sm-6 col-md-6" images={images[i]} />
          <h6>BLUELEMON</h6>
          <span>{model} / <strong>${price}</strong></span>
        </div>
      )
    }
    console.log(mockData)
    return mockData;
  }

  render() {
    console.log(this.props, 'customer');
    const images =  this.props.images || [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/f12387/#fff'},
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

    return (
      <div id="customerViewed">
        <h3 className="customerViewed__title">{this.props.name}</h3>
        <div className="customerViewed__gallery row">
          { this.generateMockData(images) }
        </div>
      </div>
    );
  }
}

export default CustomerViewed;