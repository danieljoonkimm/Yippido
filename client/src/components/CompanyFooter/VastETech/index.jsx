import React, { Component } from "react";
import "./vastETech.scss";

class FooterVastETech extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="footerVastETech_container">
        <div className="row" id="footerVastETech_row">
          <h2>Vast E Tech</h2>
            <div className="col-xs-12 col-sm-12 col-md-12">
              CALL | 1.213.745.2667
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12">
              HOURS | 8:30AM - 5:00PM (MON-FRI)
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12">
              EMAIL | info@fashiongo.net
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12">
              <button className="footerVastETech_button" id="footerVastETech_buttonTop">BE A BUYER</button>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12">
              <button className="footerVastETech_button">BE A VENDOR</button>
            </div>

        </div>
      </div>
    );
  }
}

export default FooterVastETech;
