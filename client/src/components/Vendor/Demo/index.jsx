import React, { Component } from 'react';

import ProductImage from '../ProductImage';

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  generateMockData (images) {
    let mock = [];
    
    for (let i = 1; i < images.length; i++) {
      let temp = images.slice();
      temp.splice( i, 1);

      mock.push( 
        <div className="col-xs-6 col-sm-6 col-md-6" style={{padding: '5px'}}>
          <ProductImage 
            className="col-xs-6 col-sm-6 col-md-6" 
            name={'duo'}
            images={images[i]} 
            otherImages={temp}
            isViewable={true}
          />
        </div>
      )
    }
    return mock;
  }
  render() {
    const images = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'}
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
        { url: 'https://dummyimage.com/400x600/ed3462/#fff'},
        { url: 'https://dummyimage.com/400x600/4c634f/#fff'}
      ],
      [
        { url: 'https://dummyimage.com/400x600/6bbf1f/#fff'},
        { url: 'https://dummyimage.com/400x600/cea7d7/#fff'}
      ],
    ];
    
    
    return (
      <div className="">
        <div className="row" style={{  margin: 0, padding: '0 5px'}}>
          <ProductImage 
            name="duo" 
            className="col-xs-6 col-sm-6 col-md-6" 
            images={images[0]}
            otherImages={images.slice(1,images.length)}
            isViewable={true}
          />
        </div>
        <div className="row" style={{ margin: 0 }}>
          { this.generateMockData(images) }
        </div>
      </div>
    );
  }
}

export default Demo;