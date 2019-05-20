import React, { Component } from "react";

import "./sales.scss";

class SaleList extends Component {
  constructor(props) {
    super(props);
  }

  convertGrid() {
    const salesItem = [];

    for (let i = 0; i < 24; i++) {
      salesItem.push({
        name: "Aisley Rose",
        price: 18,
        model: "L4777R",
        image: "https://dummyimage.com/400x600/26628a/fff"
      });
    }

    return salesItem.map(item => {
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
    const SalesHeader = "Sale";
    return (
      <div className="container" id="productList">
        <div className="row" style={{ width: "100%" }}>
        <h1 style={{textAlign: "left"}}>{SalesHeader}</h1>
          {this.convertGrid()}
        </div>
      </div>
    );
  }
}

export default SaleList;
