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
          <p>
            Sign up for the latest style tips, news and exclusive promotional
            offers.
          </p>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <button>Subscribe</button>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <p>Download our app</p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <button>APP</button>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <button>Google Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSubscribeDownload;
