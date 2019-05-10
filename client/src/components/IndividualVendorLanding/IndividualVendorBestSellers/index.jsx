import React, {Component} from "react";
import "./individualVendorBestSellers.scss";
import ProductImage from '../../Vendor/ProductImage';

class VendorLandingBestSellers extends Component {
  constructor() {
    super();

    this.individualBestSellers = [
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
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ]
    ];

    this.state = {}
  }

  convertGrid (images) {  
    const item = {
      name: 'Aisley Rose',
      price: 18,
      model: 'L4777R',
      image: "https://dummyimage.com/400x600/26628a/fff"
    }

    return images.map( image => { 
        return (
          <div className="col-xs-4 col-sm-4 col-md-4" style={{ padding: '5px'}}>
          <ProductImage
            className="col-xs-6 col-sm-6 col-md-6" 
            name={'duo'}
            images={image} 
            isViewable={false}
            />
            <div>
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
        </div>
        )
    });
  }

  render() {
    return(
      <div id="newArrivals">
      <div className="container" >
        <h1>BEST SELLING ITEMS</h1>
        <div className="row" style={{ margin: 0 }}>
          {this.convertGrid(this.individualBestSellers)}
        </div>
      </div>
    </div>
      // <div className="container" id="vendorLandingBestSellers_container">
      //   <h1>BEST SELLING ITEMS</h1>
      //   <div className="row" id="vendorLandingBestSellers_row">

      //   <div className="col-xs-4 col-sm-4 col-md-4">
      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
      //           <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-xs-4 col-sm-4 col-md-4">
      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
      //           <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-xs-4 col-sm-4 col-md-4">
      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
      //           <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
};

export default VendorLandingBestSellers;