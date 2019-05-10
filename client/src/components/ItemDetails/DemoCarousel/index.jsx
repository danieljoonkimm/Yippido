import React, { Component } from 'react';

import ProductImage from '../../Vendor/ProductImage';

import './demoCarousel.scss';

class DemoCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = [
      { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      { url: 'https://dummyimage.com/400x600/a4e099/#fff'}
    ];

    const otherImages = [ 
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
    ];
    return (
      <div id="demoCarousel">
        <div>
          <div id="demo__carousel" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <ProductImage 
                  className="col-xs-6 col-sm-6 col-md-6" 
                  name={'duo'}
                  images={images} 
                  isViewable={false}
                />
              </div>
              {
                otherImages.map( images => {
                  return (
                    <div className="item">
                      <div className="row">
                        <ProductImage 
                          className="col-xs-6 col-sm-6 col-md-6" 
                          name={'duo'}
                          images={images} 
                          isViewable={false}
                        />
                      </div>
                    
                    </div>
                  )
                })
              }
          
              <a className="left carousel-control" href="#demo__carousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#demo__carousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <ol className="demo-indicators">
              <li data-target="#demo__carousel" data-slide-to="0" className="active">
                <ProductImage 
                  className="col-xs-6 col-sm-6 col-md-6" 
                  name={'duo'}
                  images={images} 
                  isViewable={false}
                />
              </li>
              {
                otherImages.map( (images, i) => {
                  return (
                    <li data-target="#demo__carousel" data-slide-to={i + 1}>
                      <div className="row">
                        <ProductImage 
                          className="col-xs-6 col-sm-6 col-md-6" 
                          name={'duo'}
                          images={images} 
                          isViewable={false}
                        />
                      </div>
                    </li>
              
                  )
                })
              }
            </ol>

            
          </div>
      
        </div>
      </div>
      
    );
  }
}

export default DemoCarousel;