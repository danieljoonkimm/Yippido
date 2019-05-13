import React, { Component } from "react";
import "./shippingPayment.scss";
import ShippingLogic from "./shippingLogic.jsx";

class ShippingPayment extends Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <div className="container">
        <ShippingLogic orderSummary={this.orderSummary} shippingInformation={this.shippingInformation}/>
      </div>
    );
  }
}

export default ShippingPayment;
