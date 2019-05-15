import React, { Component } from "react";
import "./shippingPayment.scss";

class ShippingMethodLogic extends Component {
  constructor(props) {
    super(props);

    this.shipping = {
      UPS: [
        "UPS Ground 2-3 DAYS",
        "UPS 2nd Day",
        "UPS Next Day",
        "UPS 3rd Day"
      ],
      Trucking: ["Truck"],
      Other: ["Labeling Service"]
    };

    this.state = {
      checkShipping: false,
      confirmedShipping: []
    };
  }

  handleShippingSelector(e) {
    if(this.state.checkShipping === false) {
      this.setState({
        checkShipping: !this.state.checkShipping
      })
      confirmedShipping.splice(e.target.name, 1)
      // console.log(confirmedShipping)
    } else {
      this.setState({
        checkShipping: !this.state.checkingShipping
      })
      confirmedShipping.push(e.target.name)
    }
  }

  shippingMethodLogic(logic) {
    return (
      <div
        className="col-xs-9 col-sm-9 col-md-9"
        id="shippingMethodLogoOrderDetails"
        style={{ padding: "10px" }}
      >
        <div className="col-xs-5 col-sm-5 col-md-5">
          <img src={logic.companyLogo} style={{ height: "40px" }} />
        </div>
        <div
          className="col-xs-7 col-sm-7 col-md-7"
          style={{ fontSize: "12px" }}
        >
          <div className="col-xs-6 col-sm-6 col-md-6">
            <button>View Order Details</button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">Order Total:</div>
          <div className="col-xs-12 col-sm-12 col-md-12">
            Shipping charge will be added to final invoice. Estimated charge
          </div>
        </div>
      </div>
    );
  }

  shippingMethodsAvailable(methods) {
    let method = [];
    let methodType = [];
    for (let key in methods) {
      method.push(key);
      methodType.push(methods[key]);
    }

    let shippingType = method.map(shipping => {
      return <div className="col-xs-4 col-sm-4 col-md-4">{shipping}</div>;
    });
    let shippingTypeSub = methodType.map(shippingSub => {
      return <div className="col-xs-4 col-sm-4 col-md-4">{shippingSub}</div>;
    });

    shippingType

    return(
      <div className="col-xs-9 col-sm-9 col-md-9">
        {shippingType}
        {shippingTypeSub}
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        {this.shippingMethodLogic(this.props.companyInformation)}
        {this.shippingMethodsAvailable(this.shipping)}
      </div>
    );
  }
}

export default ShippingMethodLogic;
