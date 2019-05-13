import React, { Component } from "react";

class ShippingMethodLogic extends Component {
  constructor(props) {
    super(props);

    this.shipping = 
      {
        UPS: [
          "UPS Ground 2-3 DAYS",
          "UPS 2nd Day",
          "UPS Next Day",
          "UPS 3rd Day"
        ],
        Trucking: ["Truck"],
        Other: ["Labeling Service"]
      }
    ;

    this.state = {};
  }

  shippingMethodLogic(logic) {
    return (
      <div
        className="col-xs-9 col-sm-9 col-md-9"
        style={{ padding: "10px" }}
      >
        <div className="col-xs-6 col-sm-6 col-md-6">
          <img src={logic.companyLogo} />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <button>View Order Details</button>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              Order Total:
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
            Shipping charge will be added to final invoice. Estimated charge
            </div>
        </div>
      </div>
    );
  }

  shippingMethodsAvailable(methods) {

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
