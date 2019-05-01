import React, { Component } from 'react';

import Image from '../Image'

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = [{ url: 'https://dummyimage.com/400x600/26628a/fff'}, { url: 'https://dummyimage.com/400x600/26628a/fff'}];

    return (
      <div className="">
        <div className="row">
          <Image className="col-xs-6 col-sm-6 col-md-6" images={images}/>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <Image className="col-xs-6 col-sm-6 col-md-6" images={images}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <Image className="col-xs-6 col-sm-6 col-md-6" images={images}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <Image className="col-xs-6 col-sm-6 col-md-6" images={images}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <Image className="col-xs-6 col-sm-6 col-md-6" images={images}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Demo;