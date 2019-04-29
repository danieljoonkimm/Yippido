import React, { Component } from "react";

import IndividualVendorAllItemsList from "./individualVendorAllItemsList.jsx";
import "./individualVendorAllItems.scss";

class IndividualVendorAllItems extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="container" id="individualVendorAllItems_container">
        <div className="row" id="individualVendorAllItems_row">
          <div className="row" id="individualVendorAllItems_pagination">
            <h2>All Items</h2>
            <ul className="pagination">
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
            </ul>
          </div>

          <div className="row">
            <IndividualVendorAllItemsList />
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualVendorAllItems;
