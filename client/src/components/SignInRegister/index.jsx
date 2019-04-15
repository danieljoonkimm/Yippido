import React, { Component } from "react";
import axios from "axios";
import "./signInRegister.scss";
import Yippido from "../../../public/images/Yippido.png";
import magnifying_glass from "../../../public/images/magnifying_glass.jpg";

class SignInRegister extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="signInRegister_container">
        <div className="signInRegister_header">
          <img src={Yippido} alt="No Image" />
          <div className="signInRegister_searchBar">
            All |{" "}
            <input
              type="text"
              placeholder="type vendor name, item description, or style number"
            />{" "}
            | <img src={magnifying_glass} />
          </div>
          <div className="signInRegister_text">
            <div id="register">Register</div>
            <div id="signIn">Sign In</div>
          </div>
        </div>
        <div className="signInRegister_registration">
          <h1>registration</h1>
          <div className="signIn_languages">
            {" "}
            <div className="english">English</div>
            <div className="spanish">Spanish</div>
          </div>
          <div className="signIn_text">
            Join the premier online shopping mall for wholesale fashion and
            lifestyle brands
            <br />A community of 900+ vendors and nearly half a million buyers
          </div>
        </div>
        <div className="signIn_becomeBuyer">Become a BUYER</div>
        <div className="signIn_becomeVendor">Become a VENDOR</div>
      </div>
    );
  }
}

export default SignInRegister;
