import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./signIn.scss";
import topdeals from "../../../public/images/topdeals.jpeg";
import axios from "axios";
const apiSecretKey = process.env.apiSecretKey;

import CreateAccount from "./CreateAccount/index.jsx";
import SignInAccount from "./SignInAccount/index.jsx";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  onTextHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signIn() {
    console.log(this.state.email.length, 'ewgewgweegewrtyw')
    if (this.state.email.length < 6 || this.state.password.length < 4) {
      alert("Username and/or Password Invalid");
    } else {
      let sessionId = axios.get("http://yippido.com/api/rest/session", {
        header: {
          "X-Oc-Merchant-Id": apiSecretKey
        }
      });
      console.log(sessionId, 'is this my sessionID')
      this.props.history.push("/individualVendorLanding");
    }
  }

  buyerRegistration() {
    this.props.history.push("/buyerregistration");
  }

  render() {
    console.log(this.props);
    return (
      <div className="container" id="signInBuyer_container">
        <SignInAccount/>
        <CreateAccount/>
      </div>
    );
  }
}

export default withRouter(SignIn);
