import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './individualVendorFeatured.scss';

class VendorLandingFeaturedItems extends Component {
  constructor(props) {
    super(props);

  }

  convertGrid () {

    const vendorFeaturedItems = [];

    for ( let i = 0; i < 8; i++ ) {
      vendorFeaturedItems.push({
        name: 'Aisley Rose',
        price: 18,
        model: 'L4777R',
        image: "https://dummyimage.com/400x600/26628a/fff"
      });
    }


    return vendorFeaturedItems.map( item => { 
      return (
        <div className="item-list-col col-xs-3 col-sm-3 col-md-3">
          <div onClick={() => {this.props.history.push("/vendor")}}>
            <img className="img-fluid top-left" src={item.image} alt=""/>
            <div>{item.model} / <strong>${item.price}</strong></div>
            <div>{item.name}</div>
          </div>
        </div>
      )
      
    })
  }

  render() {
    return (
      <div id="productList">
        <div className="container" id="vendorLandingFeaturedItems_container" style={{ width: '100%'}}>
          <h1>FEATURED ITEMS</h1>
          <div className="row">
            { this.convertGrid() }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VendorLandingFeaturedItems);