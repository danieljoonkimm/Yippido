import React, { Component } from "react";

class ShoppingCart extends Component {
  constructor() {
    super();

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
      },
      totalProducts: 0
    };
  }

  populateShoppingCart() {
    //api call to grab all products in shopping cart
    //push all products into data array setState
    // {this.state.data.map( (products) => {
    //   console.log(products);
    // })}
  }

  componentWillMount() {
    let dataProducts = this.state.data.products.length;
    this.setState({
      totalProducts: dataProducts
    })
  }

  render() {
    return (
      <div className="container" id="shoppingCart_container">
        <div className="row" id="shoppingCart_row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            {this.state.data.products.map(products => {
              return (
                <ul>
                  <li>
                    <ul>
                      <li>
                        <img
                          style={{ width: "4em", height: "auto" }}
                          src={products.thumb}
                        />
                      </li>

                      <li>{products.name}</li>

                      <li>{products.model}</li>

                      <li>{products.quantity}</li>

                      <li>{products.price}</li>
                    </ul>
                  </li>
                </ul>
              );
            })}
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4">
            {this.state.totalProducts}
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                SUBTOTAL
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
              DOLLAR AMOUNT
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4">
            <button>GO SHOPPING CART</button>
          </div>

        </div>
      </div>
    );
  }
}

export default ShoppingCart;
