import React, { Component } from 'react';
 
import Demo from './Demo/index';
import Product from './Product/index';
import CustomerViewed from './CustomerViewed/index'

class Vendor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row" style={{ padding: '40px 0 20px 0'}}>
            <div className="col-xs-8 col-sm-8 col-md-8">
              <Demo/>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <Product/>
            </div>
          </div>    
        </div>
        <div style={{ backgroundColor: "#efefef", paddingBottom: '40px' }}>
          <div className="container">
            <CustomerViewed/>   
          </div>
        </div>

      </div>
    );
  }
}

export default Vendor;