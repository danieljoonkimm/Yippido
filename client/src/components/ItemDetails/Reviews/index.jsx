import React, { Component } from 'react';

import './reviews.scss';

class Reviews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div id="reviews">
            <h1>Customer Reviews</h1>
              <ul className="nav nav-pills">
                <li className="active">
                  <a href="#1b" data-toggle="tab">All</a>
                </li>
                <li><a href="#2b" data-toggle="tab">Most Recent</a>
                </li>
                <li><a href="#3b" data-toggle="tab">Highest to Lowest</a>
                </li>
                <li><a href="#4a" data-toggle="tab">Lowest to Highest</a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="1b">
                  
                </div>
                <div className="tab-pane" id="2b">

                </div>
                <div className="tab-pane" id="3b">
                  
                </div>
                <div className="tab-pane" id="4b">
                
                </div>
              </div>
            
          </div>
    );
  }
}

export default Reviews;