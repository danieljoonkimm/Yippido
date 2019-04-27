import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./events.scss";

class Events extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="container" id="events_container">
        <h1>EVENT</h1>
        <div className="row" id="events_row">
          <div className="col-xs-4 col-sm-4 col-md-4">
            <img
              className="img-responsive"
              alt=""
              src={dummyImg}
            />
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <img
              className="img-responsive"
              alt=""
              src={dummyImg}
            />
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4">
            <img
              className="img-responsive"
              alt=""
              src={dummyImg}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
