import React, { Component } from "react";
import "./shippingPayment.scss";

class ShippingPayment extends Component {
  constructor() {
    super();

    this.orderSummary = [
      {
        orderCount: 5,
        shippingHandling: 15.0,
        orderTotal: 93.0
      },
      {
        orderCount: 4,
        shippingHandling: 15.0,
        orderTotal: 165.0
      }
    ];

    this.shippingInformation = [
      {
        name: "Hans Kim",
        address: "20657 Golden Spring Dr",
        unit: "206",
        city: "Diamond Bar",
        state: "CA",
        zip: "91789",
        country: "United States",
        phone: 1234567890
      },
      {
        name: "Daniel Kim",
        address: "123 Los Angeles",
        unit: "206",
        city: "Los Angeles",
        state: "CA",
        zip: "90005",
        country: "United States",
        phone: 1234567890
      },
      {
        name: "Jae",
        address: "1234 Header",
        unit: "20",
        city: "Los Angeles",
        state: "CA",
        zip: "90005",
        country: "United States",
        phone: 1234567890
      }
    ];
    this.state = {};
  }

  convertShippingInformation(data) {
    return data.map(info => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-6 shippingPaymentInfo"
          style={{ padding: "10px" }}
        >
          <div
            className="row"
            style={{
              border: "1px solid black",
              padding: "10px",
              lineHeight: "20px",
              fontSize: "12px"
            }}
          >
            <div
              className="col-xs-12 col-sm-12 col-md-12"
              style={{ paddingBottom: "10px" }}
            >
              {info.name}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              {info.address} {info.unit}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              {info.city} {info.state} {info.zip}
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12"
              style={{ paddingBottom: "10px" }}
            >
              {info.country}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-6 col-sm-6 col-md-6">{info.phone}</div>
              <div className="col-xs-3 col-sm-3 col-md-3">
                <span class="glyphicon glyphicon-pencil">Edit</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  convertOrderSummary(order) {
    let orderLength = order.length;
    let totalAmount = 0;
    let orderTotal = order.map(total => {
      totalAmount = total.orderTotal + totalAmount;
    });

    return (
      <div
        className="col-xs-12 col-sm-12 col-md-12"
        style={{ padding: "10px" }}
      >
        <div className="col-xs-12 col-sm-12 col-md-12">{orderLength}</div>
        <div className="col-xs-6 col-sm-6 col-md-6">Order Total:</div>
        <div className="col-xs-6 col-sm-6 col-md-6">{totalAmount}</div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <button>Place Order</button>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <p>Every order you place with us is safe & secure</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-sm-8 col-md-8"
            style={{ padding: "10px" }}
          >
            <div
              className="row"
              style={{ border: "1px solid black", padding: "10px" }}
            >
              <h2 style={{ paddingLeft: "10px" }}>
                <strong>Shipping Information</strong>
              </h2>
              {this.convertShippingInformation(this.shippingInformation)}
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-4 col-md-4"
            style={{
              padding: "10px",
              lineHeight: "20px",
              fontSize: "12px"
            }}
          >
          <div className="row" style={{ border: "1px solid black", padding: "10px" }}>
            <h2 style={{ paddingLeft: "10px" }}>Order Summary</h2>
            {this.convertOrderSummary(this.orderSummary)}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingPayment;
