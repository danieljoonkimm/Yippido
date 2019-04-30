
import React, { Component } from 'react';


import '../CategoryBanner/categoryBanner.scss';
import './vendor.scss';

class RNVendors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="RNVendors">
        <div className="container">
          <h1>{this.props.name} Vendors</h1>
          <div className="gallery-new-vendors row align-items-center">
            <div className="new-vendor-item col-xs-4 col-sm-4 col-md-4">
              <div className="new-vendor-box-item col-xs-12 col-sm-12 col-md-12">
                <img className="img-fluid" src="https://dummyimage.com/500x400/54b8b8/fff" alt=""/>
              </div>
            </div>
            <div className="new-vendor-item col-xs-4 col-sm-4 col-md-4">
              <div className="new-vendor-box row">
                <div className="new-vendor-box-item col-xs-6 col-sm-6 col-md-6 ">
                  <img className="img-fluid new-vendor-left" src="https://dummyimage.com/250x400/10e689/fff" alt=""/>
                </div>
                <div className="new-vendor-box-item col-xs-6 col-sm-6 col-md-6">
                  <img className="img-fluid new-vendor-right" src="https://dummyimage.com/250x400/10e689/fff" alt=""/>
                </div>
              </div>
            </div>
            <div className="new-vendor-item col-xs-4 col-sm-4 col-md-4">
              <div className="new-vendor-box row">
                <div className="new-vendor-box-item col-xs-6 col-sm-6 col-md-6 ">
                  <img className="img-fluid new-vendor-left" src="https://dummyimage.com/250x400/10e689/fff" alt=""/>
                </div>
                <div className="new-vendor-box-item col-xs-6 col-sm-6 col-md-6">
                  <img className="img-fluid new-vendor-right" src="https://dummyimage.com/250x400/10e689/fff" alt=""/>
                </div>
              </div>
            </div>
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

export default RNVendors;

// https://dummyimage.com/250x400/10e689/fff