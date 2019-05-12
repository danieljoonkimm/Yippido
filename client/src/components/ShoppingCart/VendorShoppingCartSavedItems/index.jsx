import React, { Component } from "react";
import "./vendorShoppingCart.scss";

class VendorShoppingCartSavedItems extends Component {
  constructor(props) {
    super(props);

    this.data = {
      CompanyName: {
        products: [
          {
            key: "726",
            thumb:
              "http://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg",
            name: "iPod Shuffle",
            points: 0,
            product_id: "34",
            model: "Product 7",
            option: [],
            quantity: "2",
            stock: true,
            reward: "",
            price: "$122.00",
            recurring: "",
            total: "$244.00",
            price_raw: 122,
            total_raw: 244
          },
          {
            key: "726",
            thumb:
              "http://www.davidhechler.com/wp-content/uploads/2016/07/500x500-dummy-image.jpg",
            name: "iPod Shuffle",
            points: 0,
            product_id: "34",
            model: "Product 7",
            option: [],
            quantity: "2",
            stock: true,
            reward: "",
            price: "$122.00",
            recurring: "",
            total: "$244.00",
            price_raw: 122,
            total_raw: 244
          }
        ]
      }
    };

    this.shoppingCartHeader = [
      "Pic",
      "Style No.",
      "Color",
      "Size",
      "Pack",
      "Total Qty.",
      "Unit Price",
      "Amount",
      "Sel"
    ];

    this.state = {};
  }

  convertShoppingCartHeader(data) {
    return data.map(data => {
      return <div className="col-xs-1 col-sm-1 col-md-1">{data}</div>;
    });
  }

  render() {
    return (
      <div className="container" id="vendorShoppingCartSavedItems_container">
        <div className="row">
          {this.convertShoppingCartHeader(this.shoppingCartHeader)}
        </div>
      </div>
    );
  }
}

export default VendorShoppingCartSavedItems;
