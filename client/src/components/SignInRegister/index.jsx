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
          <div className="col-xs-12 signInRegister_searchBar">
            All |{" "}
            <input
              type="text"
              placeholder="type vendor name, item description, or style number"
            />{" "}
            | <img src={magnifying_glass} />
          </div>
          <div className="row signInRegister_text">
            <div className="col-xs-6" id="register">
              Register
            </div>
            <div className="col-xs-6" id="signIn">
              Sign In
            </div>
          </div>
        </div>
        <div className="row signInRegister_registration">
          <div className="row signInRegister_languages">
            <h1 className="col-xs-6">registration</h1>
            <div className="signIn_languages">
              {" "}
              <div className="col-xs-6">
                <div className="english">English</div>
                <div className="spanish">Spanish</div>
              </div>
            </div>
          </div>
          <div className="signIn_text">
            Join the premier online shopping mall for wholesale fashion and
            lifestyle brands
            <br />A community of 900+ vendors and nearly half a million buyers
          </div>
        </div>
        <div className="signIn_becomeBuyer">
          <h2>Become a BUYER</h2>
          <div className="signIn_buyerText">
            Free Membership
            <br />
            Shop thousands of new styles uploaded daily
            <br />
            Make smart purchases with our data and trend analytics
          </div>
          <div className="row">
            <div className="col-xs-6">New Members 15% OFF</div>
            <div className="col-xs-6 register_now"><button>REGISTER NOW</button></div>
          </div>
        </div>
        <div className="signIn_becomeVendor">
          <h2>Become a VENDOR</h2>
          <div className="signIn_vendorText">
            Discover new sales opportunities
            <br />
            Market your brand to thousands of qualified buyers
            <br />
            Get personalized support with a dedicated account executive
          </div>
          <div className="row">
            <div className="col-xs-6">3 MONTH FREE BANNER</div>
            <div className="col-xs-6 register_now"><button>REGISTER NOW</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInRegister;
