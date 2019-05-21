
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProductImage from '../../Vendor/ProductImage';

import './categoryBanner.scss';

class CategoryBanner extends Component {
  constructor(props) {
    super(props);
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
      <div id="categoryBanner">
        <div className="container">
          <div className="gallery row" onClick={() => {this.props.history.push("/individualVendorLanding")}}>
              <div className="brand-item col-xs-3 col-sm-3 col-md-3">
              <ProductImage 
                name="default"
                className=""
                images={[{ url: 'https://dummyimage.com/400x600/26628a/fff' }]}
                otherImages={images}
                onClick={() => { console.log('hey', ); this.props.history.push('/vendor') }}
              />  
              </div>
              <div className="item col-xs-9 col-sm-9 col-md-9">
                <div className="portfolio-item row">
                  <div className="gallery-item col-xs-4 col-sm-4 col-md-4">
                    <div className="gallery-box row">
                      <ProductImage 
                        name="quad"
                        className="gallery-box-item col-xs-6 col-sm-6 col-md-6"
                        images={[{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'}]}
                        otherImages={images}
                        onClick={() => { console.log('hey', ); this.props.history.push('/vendor') }}
                      />
                    </div>
                  </div>
                  <div >
                    <ProductImage 
                      name="default"
                      className="gallery-item col-xs-4 col-sm-4 col-md-4"
                      images={[{ url: 'https://dummyimage.com/400x600/26628a/fff' }]}
                      otherImages={images}
                      onClick={() => { console.log('hey', ); this.props.history.push('/vendor') }}
                    />    
                  </div>

                  <div className="gallery-item col-xs-4 col-sm-4 col-md-4">
                    <div className="gallery-box row">
                      <ProductImage 
                        name="quad"
                        className="gallery-box-item col-xs-6 col-sm-6 col-md-6"
                        images={[{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'}]}
                        otherImages={images}
                        onClick={() => { console.log('hey', ); this.props.history.push('/vendor') }}
                      />
                    </div>
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

export default withRouter(CategoryBanner);