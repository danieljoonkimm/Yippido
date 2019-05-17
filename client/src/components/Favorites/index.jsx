import React, { Component } from 'react';

import FavoriteStyle from './FavoriteStyle';
import FavoriteVendors from './FavoriteVendors';
import ViewHistory from './ViewHistory';

import './favorites.scss';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.images = [
      {
        id: '1',
        url: 'https://dummyimage.com/400x600/e3d187/#fff'
      },
      {
        id: '2',
        url: 'https://dummyimage.com/400x600/a4e099/#fff'
      },
      {
        id: '3',
        url: 'https://dummyimage.com/400x600/26628a/#fff'
      },
      {
        id: '4',
        url: 'https://dummyimage.com/400x600/9b192e/#fff'
      },
      {
        id: '5',
        url: 'https://dummyimage.com/400x600/929ded/#fff'
      },
      {
        id: '6',
        url: 'https://dummyimage.com/400x600/bbdbf3/#fff'
      },
      {
        id: '7',
        url: 'https://dummyimage.com/400x600/ed3462/#fff'
      },
      {
        id: '8',
        url: 'https://dummyimage.com/400x600/4c634f/#fff'
      },
      {
        id: '9',
        url: 'https://dummyimage.com/400x600/e3d187/#fff'
      },
      {
        id: '10',
        url: 'https://dummyimage.com/400x600/a4e099/#fff'
      },
      {
        id: '234',
        url: 'https://dummyimage.com/400x600/26628a/#fff'
      },
      {
        id: 'sdffe',
        url: 'https://dummyimage.com/400x600/9b192e/#fff'
      },
      {
        id: 'f1wfgfws',
        url: 'https://dummyimage.com/400x600/929ded/#fff'
      },
      {
        id: '124rfdsad',
        url: 'https://dummyimage.com/400x600/bbdbf3/#fff'
      },
      {
        id: '125rfsda',
        url: 'https://dummyimage.com/400x600/ed3462/#fff'
      },
      {
        id: '123tefksada',
        url: 'https://dummyimage.com/400x600/4c634f/#fff'
      }
    ];
    
  }

  render() {
    return (
      <div id="favorites">
        <div className="container">
          <ul className="nav nav-pills">
            <li className=""><a href="#1f" data-toggle="tab">Favorite Styles</a></li>
            <li className=""><a href="#2f" data-toggle="tab">Favorite Vendors</a></li>
            <li className="active"><a href="#3f" data-toggle="tab">View History</a></li>
            <li className=""><a href="#4f" data-toggle="tab">Look Book</a></li>
            <li></li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane " id="1f">
            <FavoriteStyle images={this.images}/>
          </div>
          <div className="tab-pane" id="2f">
            <FavoriteVendors/>
          </div>
          <div className="tab-pane active" id="3f">
            <ViewHistory images={this.images.slice(0, this.images.length / 2)}/>
          </div>
          <div className="tab-pane" id="4f">
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
            <div className="">fuckity fuck</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;