import React, { Component } from "react";

import IndividualVendorAllItemsList from "./individualVendorAllItemsList.jsx";
import "./individualVendorAllItems.scss";
import PaginationLogic from "../../globals/Pagination/index.jsx";

class IndividualVendorAllItems extends Component {
  constructor() {
    super();

    this.state = {
      numberOfItems: 400
    };
  }

  constructAllVendorFilter() {
    return(
      <div className="col-xs-4 col-sm-4 col-md-4">
      <form style={{display: "flex"}}>
        <select><option value="test"></option></select>
        <input type="text" placeholder="Price min"/>
        <input type="text" placeholder="Price max"/>
        <button>Search</button>
        </form>
      </div>
    )
  }

  constructAllVendorItems() {
    return (
      <div className="row" id="individualVendorAllItems_row">
        <div className="col-xs-12 col-sm-12 col-md-12">
          <h2>All Items</h2>
          {this.constructAllVendorFilter()}
          <PaginationLogic numberOfItems={this.state.numberOfItems} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12">
          <IndividualVendorAllItemsList />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container" id="individualVendorAllItems_container">
        {this.constructAllVendorItems()}
      </div>
    );
  }
}

export default IndividualVendorAllItems;
