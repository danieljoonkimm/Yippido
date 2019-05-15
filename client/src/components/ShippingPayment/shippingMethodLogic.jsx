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
      confirmedShipping: ''
    };
  }

  handleShippingSelector(e) {
    if(this.state.checkShipping === false) {
      this.setState({
        checkShipping: !this.state.checkShipping,
        confirmedShipping: e.target.name
      })
    } else {
      this.setState({
        checkShipping: !this.state.checkingShipping,
        confirmedShipping: ''
      })
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

  shippingMethodsParent(method) {
    let shippingMethod = [];

    for(let key in method) {
      shippingMethod.push(key);
    }
    return shippingMethod.map(shipping => {
      return <div className="col-xs-4 col-sm-4 col-md-4">{shipping}</div>;
    });
  }

  shippingMethodsChildren(methods) {
    let shippingMethods = {};
    for(let key in methods) {
      shippingMethods[key] = methods[key]
      if(shippingMethods[key].length >1) {
        return shippingMethods[key].map(shippers => {
          let multipleShip = <li>{shippers}</li>
        })
      } else if (shippingMethods[key].length ===1) {
          let singleShip = <li>{shippers}</li>
      }
    };

    return (
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="col-xs-4 col-sm-4 col-md-4">
          {multipleShip}
        </div>
      </div>
    )
    // let shippingMethods = [];
    
    // for (let key in methods) {
    //   shippingMethods.push(methods[key])
    // }
    // let eachIndividualShipping = shippingMethods.map(eachShip =>{
    //   if (eachShip.length > 1) {
    //     return eachShip.map(shippers => {
    //       return <li>{shippers}</li>
    //     })
    //   } else if(eachShip.length ===1) {
    //     return <li>{eachShip}</li>
    //   } 
    // })
    // return(<div>
    //   {eachIndividualShipping}
    // </div>
    // )
  }

  render() {
    return (
      <div className="row">
        {this.shippingMethodLogic(this.props.companyInformation)}
        <div className="col-xs-12 col-sm-12 col-md-12">
          {this.shippingMethodsParent(this.shipping)}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          {this.shippingMethodsChildren(this.shipping)}
        </div>
      </div>
    );
  }
}

export default ShippingMethodLogic;
