import React, { Component } from 'react';
import './navVendor.scss';

export default class NavVendor extends Component {
  constructor() {
    super();


  }
  render() {
    return(
      <div className="container" id="navVendor_container">
        <h1>Find Vendor</h1>
        <div className="navVendor_container">
          <div className="navVendor_left">
            <select name="" id="" className="col-xs-6 left"><option value="">Select Vendor</option></select>
          </div>
          <div className="navVendor_right">

          </div>
        </div>
      </div>
    )
  }
}