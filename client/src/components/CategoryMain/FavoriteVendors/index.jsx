
import React, { Component } from 'react';

import './favVendors.scss';
import '../CategoryBanner/categoryBanner.scss';

class FavoriteVendors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="FavoriteVendors">
        <div className="container">
          <h1>Favorite Vendors</h1>
          <div className="gallery-vendors row align-items-center">
            <div className="vendor-item col-xs-3 col-sm-3 col-md-3">
              <div className="fav-vendor-box-item col-xs-12 col-sm-12 col-md-12">
                <img className="img-fluid" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
              </div>
            </div>
            <div className="vendor-item col-xs-3 col-sm-3 col-md-3">
              <div className="fav-vendor-box-item col-xs-12 col-sm-12 col-md-12">
                <img className="img-fluid" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
              </div>
            </div>
            <div className="vendor-item col-xs-3 col-sm-3 col-md-3">
              <div className="fav-vendor-box-item col-xs-12 col-sm-12 col-md-12">
                <img className="img-fluid" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
              </div>
            </div>
            <div className="vendor-item col-xs-3 col-sm-3 col-md-3">
              <div className="fav-vendor-box-item col-xs-12 col-sm-12 col-md-12">
                <img className="img-fluid" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
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

export default FavoriteVendors;