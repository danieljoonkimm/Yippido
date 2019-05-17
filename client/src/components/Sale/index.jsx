import React, { Component } from 'react';

import SaleList from './salesList.jsx';
import "./sales.scss";

class Sale extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="container" id="sales_container">
        <div className="row" id="sales_row">

        <SaleList/>
            
        </div>
      </div>
    );
  }
}

export default Sale;