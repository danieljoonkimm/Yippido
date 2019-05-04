import React, { Component } from "react";
import "./subscribeDownload.scss";

class FooterSubscribeDownload extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footerSubscribeDownload_container">
        <div className="row" id="footerSubscribeDownload_row">
          <p className="footerSubscribeDownload_p">
            Sign up for the latest style tips, news and exclusive promotional
            offers.
          </p>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <button id="footerSubscribeDownload_button">Subscribe</button>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <p className="footerSubscribeDownload_p">Download our app</p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6" id="footerSubscribeDownload_buttonApp">
                <button className="footerSubscribeDownload_button">APP</button>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6" id="footerSubscribeDownload_buttonGoogle">
                <button className="footerSubscribeDownload_button">Google Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSubscribeDownload;
