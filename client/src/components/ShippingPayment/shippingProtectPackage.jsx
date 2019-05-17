import React, {Component} from "react";

class ShippingProtectPackage extends Component {
  constructor() {
    super();

    this.options = [
      {
        option1: "Yes, please protect my package(s) with insurance"
      },
      {
        options2 : "Yes, please protect my package(s) with signature requirement *Additional fees will be applied"
      }
    ]

    this.state = {
      isChecked: false,
      checkedData: []
    }
  }

  handleCheckbox(e) {
    console.log(e.target)
    if(this.state.isChecked === false) {
      let newCheckedData = this.state.checkedData.splice(e.target.name,1)
      this.setState({
        isChecked: !this.state.isChecked,
        checkedData: this.state.checkedData
      })
    } else {
      this.state.checkedData.push(e.target.name)
      this.setState({
        isChecked: !this.state.isChecked,
        checkedData: this.state.checkedData
      })
    }
  }

  convertPackageOptions(options) {
    return(
      options.map(options => {
        for(let key in options) {
          return(
            <div className="col-xs-12 col-sm-12 col-md-12 form-group">
              <input type="checkbox"/> {options[key]}
            </div>
          )
        }
      })
    )
  }

  render() {
    const protectPackage = "Would you like to protect your package(s)?"
    return(
      <div className="row" style={{fontSize: "12px"}}>
        <h2>{protectPackage}</h2>
        <div className="col-xs-9 col-sm-9 col-md-9">
          {this.convertPackageOptions(this.options)}
        </div>
      </div>
    )
  }
};

export default ShippingProtectPackage;