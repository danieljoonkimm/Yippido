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
      confirmedShipping: ""
    };
  }

  handleShippingSelector(e) {
    console.log(e.target.name, "name");
    let x = document.getElementsByClassName(e.target.name);
   for(let i=0; i<=x.length; i++) {
      x.className = e.target.checked;
    }
    if (this.state.checkShipping === true) {
      this.setState({
        confirmedShipping: e.currentTarget.id
      });
    } else {
      this.setState({
        checkShipping: true,
        confirmedShipping: e.currentTarget.id
      });
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

  shippingMethodsChildren(methods) {
    let shippingMethods = {};
    let eachShippingSub = [];
    let eachShippingSubFinal = [];

    for (let key in methods) {
      shippingMethods[key] = methods[key];
    }

    for (let keys in shippingMethods) {
      eachShippingSub.push(shippingMethods[keys]);
    }

    eachShippingSub.map(eachSub => {
      eachShippingSubFinal.push([eachSub]);
    });

    let finalShippingSub = eachShippingSubFinal.map(eachSub => {
      return eachSub.map(eachh => {
        return eachh.map(final => {
          return (
            <p>
              <label>
              <input
              className={final}
                name="eachSelector"
                id={final}
                type="radio"
                onClick={this.handleShippingSelector.bind(this)}
              />
              <span>{final}</span>
              </label>
            </p>
          );
        });
      });
    });

    let finalized = finalShippingSub.map(finalEach => {
      return <div className="col-xs-4 col-sm-4 col-md-4">{finalEach}</div>;
    });

    return <div className="col-xs-9 col-sm-9 col-md-9">{finalized}</div>;
  }

  shippingMethodsParent(methods) {
    let shippingMethods = {};
    let eachShipping = [];

    for (let key in methods) {
      shippingMethods[key] = methods[key];
    }

    for (let keys in shippingMethods) {
      eachShipping.push(keys);
    }

    let finalShipping = eachShipping.map(each => {
      return <div className="col-xs-4 col-sm-4 col-md-4">{each}</div>;
    });

    return <div className="col-xs-9 col-sm-9 col-md-9">{finalShipping}</div>;
  }

  render() {
    const shippingHeader = "Shipping Method"
    return (
      <div className="row">
      <div className="col-xs-9 col-sm-9 col-md-9">
      <h2 style={{padding: "10px"}}>{shippingHeader}</h2></div>
      {this.shippingMethodLogic(this.props.companyInformation)}
        {this.shippingMethodsParent(this.shipping)}
        <form action="#">{this.shippingMethodsChildren(this.shipping)}</form>
      </div>
    );
  }
}

export default ShippingMethodLogic;
