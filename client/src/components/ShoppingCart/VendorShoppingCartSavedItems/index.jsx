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
            key: "722",
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
      },
      CompanyName2: {
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

    this.state = {
      quant: 0,
      selected: false,
      arrayOfItems: []
    }
  }

  selectShoppingCartItems(data) {
    const {selected, arrayOfItems} = this.state;

    if(selected === false) {
      let search_item = data;
      for(var i = arrayOfItems.length-1; i>0; i--) {
        if(arrayOfItems[i] === search_item) {
          arrayOfItems.splice(i, 1);
        }
      }
      this.setState({
        selected: !this.state.selected
      })
    } else {
      arrayOfItems.push(data)
      this.setState({
        selected: !this.state.selected
      })
    }
    console.log(this.state.arrayOfItems, 'what')
  }

  changeShoppingQuantInput(e) {
    console.log(typeof e.target.value)
    this.setState({
      quant: e.target.value
    })
  }

  changeShoppingQuantPlus() {
      this.setState({
        quant: parseInt(this.state.quant)+1
      })
  }

  changeShoppingQuantMinus() {
    if(this.state.quant <= 0) {
      alert("not allowed")
    }
      this.setState({
        quant: parseInt(this.state.quant)-1
      })
  }

  convertShoppingCartVendorName() {
    let vendorName = "Daniels Company"
    return(
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="col-xs-2 col-sm-2 col-md-2">
          <h2>{vendorName}</h2>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6">
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2">
          <h2><button style={{border: "none", textDecoration: "underline"}}>Move to Cart</button></h2>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2">
          <h2><button style={{border: "none", textDecoration: "underline"}}>Delete</button></h2>
        </div>
      </div>
    )
  }

  convertShoppingCartHeader(shoppingCartHeader, shoppingCartItems) {
    let shoppingCartHeaderShow = shoppingCartHeader.map(data => {
      return (
          <th style={{minWidth: "100px", textAlign: "center"}}>
          {data}
          </th>
      );
    });

    let lengthOfProducts = shoppingCartItems.length;

    let shoppingCartItemsShow = shoppingCartItems.map(data => {
      return (
        <tr>
          <td className="shoppingCart_data">
            <img src={data.thumb} style={{ width: "50px", height: "auto" }} />
          </td>
          <td className="shoppingCart_data">{data.key}</td>
          <td className="shoppingCart_data">{data.color}<br/> <button style={{border: "none", textDecoration: "underline"}}>Move to Cart</button></td>
          <td className="shoppingCart_data">{data.size}</td>
          <td className="input-group shoppingCart_data" style={{ width: "50%" }}>
            <span className="input-group-btn">
              <button className="btn btn-white btn-minuse" id="btn-minus" type="button" onClick={() => {this.changeShoppingQuantMinus()}}>
                -
              </button>
            </span>
            <input
              style={{width: "60px"}}
              onChange={(e) => {this.changeShoppingQuantInput(e)}}
              type="text"
              className="form-control no-padding add-color text-center height-25"
              maxLength="1000"
              value={this.state.quant}
              min="0"
              max="1000"
              name="shoppingCartQuantity"
            />
            <span className="input-group-btn">
              <button className="btn btn-red btn-pluss" id="btn-plus" type="button" onClick={() => {this.changeShoppingQuantPlus()}}>
                +
              </button>
            </span>
          </td>

          <td className="shoppingCart_data">{lengthOfProducts}</td>
          <td className="shoppingCart_data">{data.price}</td>
          <td className="shoppingCart_data">{data.total}</td>
          <td className="shoppingCart_data">
            <input id={data.key} onClick={() => {this.selectShoppingCartItems(data.key)}} type="checkbox" />
          </td>
        </tr>
      );
    });

    return (
      <table
        className="table"
        style={{textAlign: "center", float: "none",
        margin: "0 auto" }}
      >
        <thead><tr>{shoppingCartHeaderShow}</tr></thead>
        <tbody>{shoppingCartItemsShow}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="container" id="vendorShoppingCartSavedItems_container">
        <div className="row">
        {this.convertShoppingCartVendorName()}
          <div className="col-xs-12 col-sm-12 col-md-12">
            {this.convertShoppingCartHeader(
              this.shoppingCartHeader,
              this.data.CompanyName.products
            )}
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="form-check" style={{display: "flex"}}>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">
              Select All
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorShoppingCartSavedItems;
