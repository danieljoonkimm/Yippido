import React, { Component } from "react";

import IndividualVendorAllItemsList from "./individualVendorAllItemsList.jsx";
import "./individualVendorAllItems.scss";

class IndividualVendorAllItems extends Component {
  constructor() {
    super();

    let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    this.state = {};
  }

  render() {
    return (
      <div className="container" id="individualVendorAllItems_container">
        <div className="row" id="individualVendorAllItems_row">
          <div className="row" id="individualVendorAllItems_pagination" style={{ display: "flex"}}>
            <h2>All Items</h2>
            <nav aria-label="Page navigation" style={{ width: "fit-content"}} >
              <ul class="pagination" style={{ display: "flex", flexDirection:"row"}} >
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">7</a></li>
                <li><a href="#">8</a></li>
                <li><a href="#">9</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
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
