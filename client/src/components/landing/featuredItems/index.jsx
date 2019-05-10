import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./featuredItems.scss";
import ProductImage from '../../Vendor/ProductImage';

class FeaturedItems extends Component {
  constructor() {
    super();

    this.featuredItems = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/ed3462/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/ed3462/#fff'},
      ]
    ];

    this.generateMockData = this.generateMockData.bind(this);

    this.state = {};
  }

  

  generateMockData (images) {
    let mock = [];
    
    for (let i = 0; i < images.length; i++) {

        mock.push( 
          <div className="col-xs-3 col-sm-3 col-md-3" style={{padding: '5px'}}>
            <ProductImage 
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={images[i]} 
              isViewable={false}
            />
          </div>
        );
    }

    return mock;
  }

  render() {
    return (
      <div id="RNVendors">
      <div className="container">
        <h1>FEATURED ITEMS</h1>
        <div className="row">
          { this.generateMockData(this.featuredItems) }
        </div>

      </div>
    </div>
      // <div className="container" id="featuredItems_container">
      // <h1>FEATURED ITEMS</h1>
      //   <div className="row">
      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default FeaturedItems;
