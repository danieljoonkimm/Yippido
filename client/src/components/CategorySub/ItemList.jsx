import React, { Component } from 'react';


import './itemList.scss';
//items passed down from props'

class ItemList extends Component {
  constructor(props) {
    super(props);

  }

  convertGrid () {

    const items = [];

    for ( let i = 0; i < 24; i++ ) {
      items.push({
        name: 'Aisley Rose',
        price: 18,
        model: 'L4777R',
        image: "https://dummyimage.com/400x600/26628a/fff"
      });
    }


    return items.map( item => { 
      return (
        <div className="item-list-col col-xs-3 col-sm-3 col-md-3">
          <div>
            <img className="img-fluid top-left" src={item.image} alt=""/>
            <div>{item.model} / <strong>${item.price}</strong></div>
            <div>{item.name}</div>
          </div>
        </div>
      )
      
    })
  }

  render() {
    return (
      <div id="productList">
        <div className="container" style={{ width: '100%'}}>
          <div className="row">
            { this.convertGrid() }
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;