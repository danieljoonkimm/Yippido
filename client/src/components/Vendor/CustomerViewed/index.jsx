import React, { Component } from 'react';

import Image from '../Image';

import './customerViewed.scss';

class CustomerViewed extends Component {
  constructor(props) {
    super(props);
  }

  generateMockData (images) {
    let mockData = [];

    for ( let i = 0; i < 3; i++ ) {
      let model = `${String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()}${Math.floor(Math.random()*90000) + 10000}`;
      let price = `${(Math.random() * 20 + 10).toFixed(2)}`

      mockData.push(
        <div className="customerViewed__vendor scol-xs-4 col-sm-4 col-md-4">
          <Image className="col-xs-6 col-sm-6 col-md-6" images={images}/>
          <h6 >BLUELEMON</h6>
          <span>{model} / <strong>${price}</strong></span>
        </div>
      )
    }

    return mockData;
  }

  render() {
    const images = [
      { 
        url: 'https://dummyimage.com/400x600/26628a/fff'
      }, 
      { 
        url: 'https://dummyimage.com/400x600/26628a/fff'
      }
    ];

    return (
      <div id="customerViewed">
        <h3 className="customerViewed__title">Customer Also Viewed</h3>
        <div className="customerViewed__gallery row">
          { this.generateMockData(images) }
        </div>
      </div>
    );
  }
}

export default CustomerViewed;