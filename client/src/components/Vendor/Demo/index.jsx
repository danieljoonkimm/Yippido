import React, { Component } from 'react';

import Image from '../Image'

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  generateMockData (images) {
    let mock = [];
    
    for (let i = 1; i < images.length; i++) {
      let temp = images.slice();
      temp.splice( i, 1);
      let otherImages = temp;

      mock.push( 
        <div className="col-xs-6 col-sm-6 col-md-6">
          <Image className="col-xs-6 col-sm-6 col-md-6" images={images[i]} otherImages={otherImages} />
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
    ]
    
    
    return (
      <div className="">
        <div className="row">
          <Image className="col-xs-6 col-sm-6 col-md-6" images={images[0]} otherImages={images.slice(1,images.length)}/>
        </div>
        <div className="row">
          { this.generateMockData(images) }
        </div>
      </div>
    );
  }
}

export default Demo;