import React, { Component } from 'react';

import './purchase.scss';

class Purchase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="purchase">
          <ul className="nav nav-pills">
            <li className="active"><a href="#1b" data-toggle="tab">Purchase</a></li>
            <li className=""><a href="#2b" data-toggle="tab">Order Detail</a></li>
          </ul>
          <div className="tab-content clearfix">
            <div className="tab-pane active" id="1b">
              <div className="">fuckity fuck</div>
              <div className="">fuckity fuck</div>
              <div className="">fuckity fuck</div>
              <div className="">fuckity fuck</div>
            </div>
            <div className="tab-pane" id="2b">
              <div className="">fuckity fuck</div>
              <div className="">fuckity fuck</div>
              <div className="">fuckity fuck</div>
              <div className="">fuckity fuck</div>
            </div>
          </div>
        </div>
        <div className="purchase__btn">
          <button className="addToBag">Add To Bag</button>
          <button className="favorite-btn">
          <div className="heart"></div>
          Favorite</button>
        </div>
      </div>
    );
  }
}

export default Purchase;