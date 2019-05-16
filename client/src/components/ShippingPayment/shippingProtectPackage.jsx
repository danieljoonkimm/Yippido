import React, {Component} from "react";

class ShippingProtectPackage extends Component {
  constructor() {
    super();

    this.options = [
      "Yes, please protect my package(s) with insurance",
      "Yes, please protect my package(s) with signature requirement *Additional fees will be applied"
    ]


    this.state = {
      isChecked: false,
      checkedData: []
    }
  }

  handleCheckbox(e) {
    console.log(e.target.name, this.state.isChecked)
    if(this.state.isChecked === false) {
      this.setState({
        isChecked: !this.state.isChecked
      })
    } else {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }
  }

  convertPackageOptions(options) {
    return(
      options.map(options => {
        return (
          <div className="form-group">
            <input type="checkbox" name="eachSelector" onClick={this.handleCheckbox.bind(this)}/> {options}
          </div>
        )
      })
    )
  }

  render() {
    const protectPackage = "Would you like to protect your package(s)?"
    return(
      <div className="row">
        <h2>{protectPackage}</h2>
        <div className="col-xs-9 col-sm-9 col-md-9">
          {this.convertPackageOptions(this.options)}
        </div>
      </div>
    )
  }
};

export default ShippingProtectPackage;