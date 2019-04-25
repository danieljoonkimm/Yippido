import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./categoryCollection.scss";

class CategoryCollection extends Component {
  constructor() {
    super();

    this.state = {
      dummyData: {
        WOMEN: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS],
        MEN: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS],
        KID: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS],
        SHOES: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS],
        ACCESSORIES: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS],
        HANDBAGS: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS],
        OTHERS: [TOPS, DRESSES, PANTS, JACKETS/OUTERWEAR, SKIRTS, DENIM, OTHERS]
      }
    };
  }
  render() {
    return (
      <div className="container" id="categoryCollection_container">
        <h1>CATEGORY COLLECTION</h1>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-sm-2">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <img className="img-responsive" alt="" src={dummyImg} />
            </div>
          </div>

          <div className="col-xs-10 col-sm-10 col-md-10">
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCollection;
