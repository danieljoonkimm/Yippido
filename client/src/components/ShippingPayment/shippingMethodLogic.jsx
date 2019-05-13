import React, {Component} from "react";

class ShippingMethodLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  shippingMethodLogic(logic) {
    return(
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-4 col-sm-4 col-md-4">
          <img src ={logic.companyLogo}/>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        {this.shippingMethodLogic(this.props.companyInformation)}
      </div>
    )
  }
};

export default ShippingMethodLogic;