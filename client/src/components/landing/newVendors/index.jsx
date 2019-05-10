import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./newVendors.scss";
import ProductImage from '../../Vendor/ProductImage';

class NewVendors extends Component {
  constructor() {
    super();

    this.state = {};
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
      <div className="container" id="newVendors_container">
      <h1>NEW VENDORS</h1>
        <div className="gallery row">
            <div className="brand-item col-xs-3 col-sm-3 col-md-3">
            <ProductImage 
              name="default"
              className=""
              images={[{ url: 'https://dummyimage.com/400x600/26628a/fff' }]}
              otherImages={images}
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
                    />
                  </div>
                </div>
                <div >
                  <ProductImage 
                    name="default"
                    className="gallery-item col-xs-4 col-sm-4 col-md-4"
                    images={[{ url: 'https://dummyimage.com/400x600/26628a/fff' }]}
                    otherImages={images}
                  />    
                </div>

                <div className="gallery-item col-xs-4 col-sm-4 col-md-4">
                  <div className="gallery-box row">
                    <ProductImage 
                      name="quad"
                      className="gallery-box-item col-xs-6 col-sm-6 col-md-6"
                      images={[{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'},{ url: 'https://dummyimage.com/400x600/26628a/fff'}]}
                      otherImages={images}
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
      // <div className="container" id="highlightVendors_container">
      //   <h1>NEW VENDORS</h1>
      //   <div className="row" id="highlightVendors_row">
      //     <div className="col-xs-3 col-sm-3 col-md-3">
      //       <div className="col-xs-12 col-sm-12 col-md-12">
      //         <img
      //           className="img-responsive highlightVendors_bigImage"
      //           alt=""
      //           src="https://dummyimage.com/400x600/26628a/fff"
      //         />
      //       </div>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3">
      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_topLeft"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_topRight"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_bottomLeft"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_bottomRight"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3">
      //       <div className="col-xs-12 col-sm-12 col-md-12">
      //         <img
      //           className="img-responsive highlightVendors_bigImage"
      //           alt=""
      //           src="https://dummyimage.com/400x600/26628a/fff"
      //         />
      //       </div>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3">
      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_topLeft"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_topRight"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_bottomLeft"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive"
      //             id="highlightVendors_bottomRight"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default NewVendors;
