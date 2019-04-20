import React, { Component } from "react";
import axios from "axios";
import "./signInRegister.scss";
import Yippido from "../../../public/images/Yippido.png";
import magnifying_glass from "../../../public/images/magnifying_glass.jpg";
import topdeals from "../../../public/images/topdeals.jpeg";

class SignInRegister extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="registration">
        <div className="row container">
          <div className="header">
            <h1>Registration</h1>
            <div className="languageBtn_container">
              <button>English</button>
              <button>Spanish</button>
            </div>
            <p>
              Join the premier online shopping mall for wholesale fashion and
              lifestyle brands
            </p>
            <p>
              A community of 900+ wholesale vendors & nearly half a million
              buyers.
            </p>
          </div>
        </div>

        <div className="row col-md-6 become_container">
          <div className="row become">
            <h2>Become a BUYER</h2>
            <div className="become_text">
              <p>Free Membership</p>
              <p>Shop thousands of new styles uploaded daily</p>
              <p>Make smart purchases with our data & trend analytics</p>
            </div>
          </div>

          <div className="row become_register">
            <div className="col-xs-6 become_img">
              <img src={topdeals} alt="" />
            </div>
            <div className="col-xs-6 become_button">
              <button>REGISTER NOW</button>
            </div>
          </div>
        </div>

        <div className="row col-md-6 become_container" id="buyer">
          <div className="row become">
            <h2>Become a BUYER</h2>
            <div className="become_text">
              <p>Discover new sales opportunities</p>
              <p>Market your brand to thousands of qualified buyers</p>
              <p>Get personalized support with a dedicated account executive</p>
            </div>
          </div>

          <div className="row become_register">
            <div className="col-xs-6 become_img">
              <img src={topdeals} alt="" />
            </div>
            <div className="col-xs-6 become_button">
              <button>REGISTER NOW</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInRegister;
