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
            thumb: "https://img.pranavc.in/200",
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
            total_raw: 244,
            color: "red",
            size: ["S", "M", "L"]
          },
          {
            key: "726",
            thumb: "https://img.pranavc.in/200",
            name: "iPod Shuffle2",
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
            total_raw: 244,
            color: "blue",
            size: ["S", "M", "L"]
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

  convertShoppingCartHeader(shoppingCartHeader, shoppingCartItems) {
    let shoppingCartHeaderShow = shoppingCartHeader.map(data => {
      return <tr>{data}</tr>;
    });
    console.log(shoppingCartHeaderShow);

    let lengthOfProducts = shoppingCartItems.length;

    let shoppingCartItemsShow = shoppingCartItems.map(data => {
      return (
        <tr>
          <td>
            <img src={data.thumb} style={{ width: "50px", height: "auto" }} />
          </td>
          <td>{data.key}</td>
          <td>{data.color}</td>
          <td>{data.size}</td>
          <td style={{display: "flex"}}>
            <button
              type="button"
              class="btn btn-default btn-number"
              disabled="disabled"
              data-type="minus"
              data-field="quant[1]"
            >
              <span class="glyphicon glyphicon-minus" />
            </button>
            <input
              type="text"
              name="quant[1]"
              class="form-control input-number"
              value="1"
              min="1"
            />
            <button
              type="button"
              class="btn btn-default btn-number"
              data-type="plus"
              data-field="quant[1]"
            >
              <span class="glyphicon glyphicon-plus" />
            </button>
          </td>
          <td>{lengthOfProducts}</td>
          <td>{data.price}</td>
          <td>{data.total}</td>
          <td><input type="checkbox"/></td>
        </tr>
      );
    });

    // <div class="input-group">
    //       <span class="input-group-btn">
    //           <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
    //               <span class="glyphicon glyphicon-minus"></span>
    //           </button>
    //       </span>
    //       <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
    //       <span class="input-group-btn">
    //           <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
    //               <span class="glyphicon glyphicon-plus"></span>
    //           </button>
    //       </span>
    //   </div>
    return (
      <table className="table">
        <thead style={{ display: "flex" }}>{shoppingCartHeaderShow}</thead>
        <tbody>{shoppingCartItemsShow}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="container" id="vendorShoppingCartSavedItems_container">
        {this.convertShoppingCartHeader(
          this.shoppingCartHeader,
          this.data.CompanyName.products
        )}
      </div>
    );
  }
}

export default VendorShoppingCartSavedItems;
