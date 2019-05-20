import React, { Component } from "react";

import "./individualVendorAllItems.scss";

class IndividualVendorAllItemsList extends Component {
  constructor(props) {
    super(props);
  }

  convertGrid() {
    const AllItem = [];

    for (let i = 0; i < 24; i++) {
      AllItem.push({
        name: "Aisley Rose",
        price: 18,
        model: "L4777R",
        image: "https://dummyimage.com/400x600/26628a/fff"
      });
    }

    return AllItem.map(item => {
      return (
        <div className="item-list-col col-xs-3 col-sm-3 col-md-3">
          <div>
            <img className="img-fluid top-left" src={item.image} alt="" />
            <div>
              {item.model} / <strong>${item.price}</strong>
            </div>
            <div>{item.name}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container" id="productList">
        <div className="row" style={{ width: "100%" }}>
          {this.convertGrid()}
        </div>
      </div>
    );
  }
}

export default IndividualVendorAllItemsList;
