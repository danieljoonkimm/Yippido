import React, { Component } from "react";

class ShippingMethodLogic extends Component {
  constructor(props) {
    super(props);

    this.shipping = [
      {
        UPS: [
          "UPS Ground 2-3 DAYS",
          "UPS 2nd Day",
          "UPS Next Day",
          "UPS 3rd Day"
        ]
      },
      {
        Trucking: ["Truck"]
      },
      {
        Other: ["Labeling Service"]
      }
    ];

    this.state = {};
  }

  shippingMethodLogic(logic) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="col-xs-4 col-sm-4 col-md-4">
          <img src={logic.companyLogo} />
        </div>
      </div>
    );
  }

  shippingMethodsAvailable(shipping) {

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
