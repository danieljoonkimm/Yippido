
import React, { Component } from 'react';

import './categoryBanner.scss';

class CategoryBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="categoryBanner">
        <div className="container">
          <div className="category-title">
            <h1>Women</h1>
            <div className="category-dropdown-menus">
              <div className="btn-group category-dropdown-btns">
                <button type="button" className="btn btn-default dropdown-toggle category-dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Women Category <span className="caret"></span>
                </button>
                <ul className="dropdown-menu category-dropdown">
                  <li><a href="#">Women Category</a></li>
                </ul>
              </div>
              <div className="btn-group category-dropdown-btns">
                <button type="button" className="btn btn-default dropdown-toggle category-dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Women Vendors <span className="caret"></span>
                </button>
                <ul className="dropdown-menu category-dropdown">
                  <li><a href="#">Women Vendors</a></li>
                </ul>
              </div>
              <div className="btn-group category-dropdown-btns">
                <button type="button" className="btn btn-default dropdown-toggle category-dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Look Book <span className="caret"></span>
                </button>
                <ul className="dropdown-menu category-dropdown">
                  <li><a href="#">Look Book</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div className="gallery row align-items-center">
              <div className="brand-item col-xs-3 col-sm-3 col-md-3">
                <img className="img-fluid" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
              </div>
              <div className="item col-xs-9 col-sm-9 col-md-9">
                <div className="portfolio-item row">

                  <div className="gallery-item col-xs-4 col-sm-4 col-md-4">

                    <div className="gallery-box row">

                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid top-left" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid top-right" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                      <div className="w-100"></div>
                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid bottom-left" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid bottom-right" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                    </div>
                  </div>

                  <div className="gallery-item col-xs-4 col-sm-4 col-md-4">

                    <img className="img-fluid" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                  </div>

                  <div className="gallery-item col-xs-4 col-sm-4 col-md-4">

                    <div className="gallery-box row">

                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid top-left" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid top-right" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                      <div className="w-100"></div>
                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid bottom-left" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                      <div className="gallery-box-item col-xs-6 col-sm-6 col-md-6">
                        <img className="img-fluid bottom-right" src="https://dummyimage.com/400x600/26628a/fff" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-group banner-buttons" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-category">Ashes Belbet</button>
              <div className="separator"></div>
              <button type="button" className="btn btn-category">Zenana</button>
              <div className="separator"></div>
              <button type="button" className="btn btn-category">DoubleZero</button>
            </div>

        </div>
      </div>
    );
  }
}

export default CategoryBanner;