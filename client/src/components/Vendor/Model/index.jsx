import React, { Component } from 'react';

import './model.scss';

class Model extends Component {
  constructor(props) {
    super(props);

    this.model = {
      name: 'Gabi',
      productSize: 'M',
      height: `5'7"`,
      weight: '122 lbs',
      bust: '33"',
      waist: '23"',
      hip: '35"',
      shoulder: '15"',
      img: 'https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    }
  }

  render() {
    const { name, productSize, height, weight, bust, waist, hip, shoulder, img } = this.model;
    return (
      <div id="model">
        <div className="model__stats">
          <h1>Model Stats</h1>
          <button className="btn model__showMore" type="button" data-toggle="collapse" data-target="#model__collaspe" aria-expanded="false" aria-controls="model__collaspe">
            -
          </button>
        </div>
         <div className="collapse model__collaspse" id="model__collaspe">
          <div className="well">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4">
                <img src={img} alt=""/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="model__name">{name}</div>
                <div>is a size {productSize}</div>
              </div>
              <ul className="model__dimensions col-xs-4 col-sm-4 col-md-4">
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
                <li>Bust: {bust}</li>
                <li>Waist: {waist}</li>
                <li>Hip: {hip}</li>
                <li>Shoulder: {shoulder}</li>

              </ul>
            </div>

          </div>
        </div>


      </div>
    );
  }
}

export default Model;