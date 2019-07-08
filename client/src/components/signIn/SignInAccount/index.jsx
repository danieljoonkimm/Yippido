import React, {Component} from "react";

class SignInAccount extends Component {
  constructor() {
    super();

    this.state = {}
  };
  
  convertSignInAccount() {
    const createSignInHeader = "sign in";
    return(
      <div className="row">
        <h1 style={{textTransform: "uppercase"}}>{createSignInHeader}</h1>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            If you have an account with us, please log in.
          </div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.convertSignInAccount()}
      </div>
    )
  }
};

export default SignInAccount;