import React, { Component } from "react";

class ShippingLogic extends Component {
  constructor(props) {
    super(props);

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
                <span className="glyphicon glyphicon-pencil">Edit</span>
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
        <div className="col-xs-12 col-sm-12 col-md-12">Orders({orderLength})</div>
        <div className="col-xs-6 col-sm-6 col-md-6">Order Total:</div>
        <div className="col-xs-6 col-sm-6 col-md-6">{totalAmount}</div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <button style={{width: "100%"}}>Place Order</button>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <p>Every order you place with us is safe & secure</p>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="row">
      <div
        className="col-xs-12 col-sm-8 col-md-8"
        style={{ padding: "10px" }}
      >
        <div
          className="row"
          style={{ border: "1px solid black", padding: "10px" }}
        >
          <h2 style={{ paddingLeft: "10px", borderBottom: "1px solid black" }}>
            <strong>Shipping Information</strong>
          </h2>
          {this.convertShippingInformation(this.props.shippingInformation)}
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
        <h2 style={{ paddingLeft: "10px", borderBottom: "1px solid black" }}>Order Summary</h2>
        {this.convertOrderSummary(this.props.orderSummary)}
      </div>
      </div>
    </div>
    )
  }
}

export default ShippingLogic;