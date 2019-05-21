import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./vendors.scss";
import ProductImage from '../../Vendor/ProductImage';
import {withRouter} from "react-router-dom";

class Vendors extends Component {
  constructor() {
    super();

    this.big = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ]
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
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ]
    ];

    this.state = {
      vendors: [
        "vendor1",
        "vendor1",
        "vendor1",
        "vendor1",
        "vendor1",
        "vendor1"
      ]
    };
  }

  convertGrid (images) {  
    const item = {
      image: "https://dummyimage.com/400x600/26628a/fff"
    }

    return images.map( image => { 
      if ( image.length === 1 ) {
        return (
          <div className="col-xs-12 col-sm-12 col-md-12" style={{ padding: '5px'}} onClick={() => {this.props.history.push("/individualvendorlanding")}}>
            <ProductImage
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={image} 
              isViewable={false}
            />
          </div>
        )
      } else {
        return (
          <div className="col-xs-6 col-sm-6 col-md-6" style={{ padding: '5px'}} onClick={() => {this.props.history.push("/individualvendorlanding")}}>
            <ProductImage
              className="col-xs-6 col-sm-6 col-md-6" 
              name={'duo'}
              images={image} 
              isViewable={false}
            />
          </div>
        )
      }
    });
  }
  
  render() {
    return (
      <div id="vendorMain_Container">
      <div className="container" >
        <div className="row" style={{ margin: 0 }}>
        <div className="col-xs-4 col-sm-4 col-md-4">
          {this.convertGrid(this.big)}
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8" style={{ margin: 0 }}>
          {this.convertGrid(this.small)}
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

    
      // <div className="container" id="vendorMain_container">
      //   <div className="row" id="vendorMain_row">
      //     <div className="col-xs-4 col-sm-4 col-md-4" id="vendorMain_mainImage">
      //       <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
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

      //   <div className="mainPage_vendors">
      //     {this.state.vendors.map(vendors => {
      //       let mappedVendors =<li key={vendors.toString()}><button>{vendors}</button></li>;
      //       return (<ul>{mappedVendors}</ul>);
      //     })}
      //   </div>
      // </div>
    );
  }
}

export default withRouter(Vendors);
