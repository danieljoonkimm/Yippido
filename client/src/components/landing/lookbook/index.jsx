import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./lookbook.scss";
import ProductImage from '../../Vendor/ProductImage';

class LookBook extends Component {
  constructor() {
    super();

    this.lookBook = [
      [
        { url: 'https://dummyimage.com/800x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
    ];

    this.state = {};
  }


  generateMockData (images) {
    let mock = [];
    
    const item = {
      name: 'Aisley Rose',
      price: 18,
      model: 'L4777R',
      image: "https://dummyimage.com/400x600/26628a/fff"
    }
    
    for (let i = 0; i < images.length; i++) {
      
      if ( images[i].length === 1) {
        mock.push( 
          <div className="col-xs-4 col-sm-4 col-md-4" style={{padding: '5px'}}>
            <ProductImage 
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={images[i]} 
              isViewable={false}
            />
            <div>
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
          </div>
        );
      } else {
        mock.push( 
          <div className="col-xs-4 col-sm-4 col-md-4" style={{padding: '5px'}}>
            <ProductImage 
              className="col-xs-6 col-sm-6 col-md-6" 
              name={'default'}
              images={images[i]} 
              isViewable={false}
            />
            <div>
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
          </div>
          
        );
      }
    }

    return mock;
  }

  render() {
    return (
      <div id="newArrivals">
      <div className="container" >
        <h1>FROM THE LOOK BOOK</h1>
        <div className="row" style={{ margin: 0 }}>
        {this.generateMockData(this.lookBook)}
        </div>
      </div>
    </div>
      // <div className="container" id="lookBookVendors_container">
      //   <h1>FROM THE LOOK BOOK</h1>
      //   <div className="row" id="lookBook_row">
      //   <div className="row" id="lookBook_mainImage">
      //     <div
      //       className="col-xs-12 col-sm-12 col-md-12"
      //       id="lookBookMain_mainImage"
      //     >
      //       <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //       <p>SAMPLE</p>
      //       <p>SAMPLE</p>
      //     </div>
      //   </div>

      //     <div className="col-xs-4 col-sm-4 col-md-4 lookBookMain_subParent">
      //       <div className="row lookBook_subImages">
      //         <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
      //           <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           <p>SAMPLE</p>
      //           <p>SAMPLE</p>
      //         </div>
      //         <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
      //           <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           <div />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-xs-4 col-sm-4 col-md-4 lookBookMain_subParent">
      //       <div className="row lookBook_subImages">
      //         <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
      //           <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           <p>SAMPLE</p>
      //           <p>SAMPLE</p>
      //         </div>
      //         <div className="col-xs-6 col-sm-6 col-md-6 lookBookMain_subImage">
      //           <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default LookBook;
