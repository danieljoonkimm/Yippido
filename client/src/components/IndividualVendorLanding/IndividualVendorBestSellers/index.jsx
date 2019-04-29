import React, {Component} from "react";
import "./individualVendorBestSellers.scss";

class VendorLandingBestSellers extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="container" id="vendorLandingBestSellers_container">
        <h1>BEST SELLING ITEMS</h1>
        <div className="row" id="vendorLandingBestSellers_row">

        <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
                <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
                <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 vendorMain_topRow">
                <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6">
                <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default VendorLandingBestSellers;