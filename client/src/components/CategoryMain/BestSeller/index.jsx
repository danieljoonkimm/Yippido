import React, { Component } from 'react';

import ProductImage from '../../Vendor/ProductImage';
import {withRouter} from "react-router-dom";

class BestSeller extends Component {
  constructor(props) {
    super(props);

    this.dopes = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
    ];


    this.small = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'},
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

  generateBig() {
    let mock = [];

    for ( let i = 0; i < 3; i++ ) {
      mock.push(
        <div className="col-xs-4 col-sm-4 col-md-4" style={{ padding: '10px'}}>
          <ProductImage 
            className="col-xs-12 col-sm-12 col-md-12" 
            name={'default'}
            images={this.dopes[i]} 
            isViewable={false}
          />
          <div>L574892S / $32.00</div>
        </div>
      )
    }

    return mock;
  }

  generateSmall() {
    let mock = [];

    for ( let i = 0; i < 15; i++ ) {
      mock.push(
        <div className="col-xs-4 col-sm-4 col-md-4" style={{ padding: '10px'}} onClick={() => {this.props.history.push("/vendor")}}>
          <ProductImage 
            className="col-xs-6 col-sm-6 col-md-6" 
            name={'duo'}
            images={this.small[i]} 
            isViewable={false}
          />
          <div>L574892S / $32.00</div>
        </div>
      )
    }

    return mock;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            { this.generateBig() }
          </div>
        </div>
        <div className="container">
          <div className="row">
            { this.generateSmall() }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BestSeller);