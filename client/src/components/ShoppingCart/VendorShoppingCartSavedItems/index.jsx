import React, { Component } from "react";

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
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{width:"50%"}}>Product</th>
              <th style={{width:"10%"}}>Price</th>
              <th style={{width:"8%"}}>Quantity</th>
              <th style={{width:"22%"}} className="text-center">
                Subtotal
              </th>
              <th style={{width:"10%"}} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src="http://placehold.it/100x100"
                      alt="..."
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-sm-10">
                    <h4 className="nomargin">Product 1</h4>
                    <p>awfag</p>
                  </div>
                </div>
              </td>
              <td data-th="Price">$1.99</td>
              <td data-th="Quantity">
                <input type="number" className="form-control text-center" />
              </td>
              <td data-th="Subtotal" className="text-center">
                1.99
              </td>
              <td className="actions" data-th="">
                <button className="btn btn-info btn-sm">
                  <i className="fa fa-refresh" />
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash-o" />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total 1.99</strong>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" style={{width: "fit-content"}} className="btn btn-warning">
                  <i style={{width: "fit-content"}}/> Clear All
                </a>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total $1.99</strong>
              </td>
              <td>
                <a href="#" className="btn btn-success btn-block">
                  Continue Shopping <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default VendorShoppingCartSavedItems;
