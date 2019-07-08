import React, { Component } from "react";

class CreateAccount extends Component {
  constructor() {
    super();

    this.state = {};
  }

  convertCreateAccount() {
    const createAccountHeader = "create account";
    return (
      <div className="row">
        <h1 style={{ textTransform: "uppercase" }}>{createAccountHeader}</h1>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          Registration is free for buyers. Join Perfetii.com right now and your
          purchasing is just one-click away. Instead of visiting a single store
          online, you can now visit all the online stores of your favorite
          vendors and order in the convenience of your home or office
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container" id="createAccount">
        {this.convertCreateAccount()}
      </div>
    );
  }
}

export default CreateAccount;
