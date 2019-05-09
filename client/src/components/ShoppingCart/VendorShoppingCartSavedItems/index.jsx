import React, { Component } from "react";
import "./vendorShoppingCart.scss";

class VendorShoppingCartSavedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
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
  }

  render() {
    return (
      <div className="container" id="vendorShoppingCartSavedItems_container">
        <div className="row vendorShoppingCartSavedItems_shopping-cart">
          <div className="row vendorShoppingCartSavedItems_column-labels">
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-image">
              Pic
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-styleNo">
              Style No.
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-color">
              Color
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-size">
              Size
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-pack">
              Pack
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-totalQty">
              Total Qty.
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-unitPrice">
              Unit Price
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-amount">
              Amount
            </label>
            <label className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product-sel">
              Sel
            </label>
          </div>

          <div className="row vendorShoppingCartSavedItems_column-labelInfo">
            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              <img
                src="https://s.cdpn.io/3/dingo-dog-bones.jpg"
                style={{ width: "1em" }}
              />
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              123
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              Red
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              1-2-3
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              <input
                type="number"
                value=""
                min="1"
                style={{ width: "fit-content" }}
              />
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              6
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              $12.00
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              $1000
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1 vendorShoppingCartSavedItems_product">
              <input type="checkbox" />
            </div>
          </div>

          <div className="row vendorShoppingCartSavedItems_totals">
            <div className="col-xs-2 col-sm-2 col-md-2">
              <input type="checkbox"/> Select All
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6">
              <button className="vendorShoppingCartSavedItems_clearAll">
                CLEAR ALL
              </button>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4">
              <button className="vendorShoppingCartSavedItems_checkout">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorShoppingCartSavedItems;
