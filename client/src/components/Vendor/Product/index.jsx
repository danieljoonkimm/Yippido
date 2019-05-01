import React, { Component } from 'react';

import './products.scss';

class Product extends Component {
  constructor(props) {
    super(props);

    this.product = {
      name: 'Ruffle Trim Buttoned Blouse',
      model: 'H-43521',
      type: 'Lorsw blouse',
      price: '13.95',
      description: {
        desc: 'Floral print mini dress ruffled sleeves decorative button front fitted bodice and waste V-neck',
        features: ['polka dotted dress with self belt tie', 'pockets', 'lined']
      },
      specs: { 
        Fabric: 'Polyester',
        Made: 'Import',
        Stock: 'In Stock',
        Label: 'Labeled',
      }
    }
  }

  generateMockData() {
    let mock = [];

    for ( let key in this.product.specs ) {
      mock.push( 
        <div className="product__spec col-xs-3 col-sm-3 col-md-3">{key}</div>
      )
      mock.push(<div className="product__spec col-xs-9 col-sm-9 col-md-9">{this.product.specs[key]}</div>)
    }

    return mock;
  }

  render() {
    return (
      <div>
        <div className="product__details">
          <h2>{this.product.name}</h2>
          <h4>{this.product.model} / {this.product.type}</h4>
          <h3>${this.product.price}</h3>
        </div>
        <div className="product__description">
          <h6>Product Description</h6>
          <div className="product_desc">{this.product.description.desc}</div>
          <ul>
            {
              this.product.description.features.map( feature => {
                return <li className="">+ {feature}</li>
              })
            }
          </ul>
        </div>
        <div className="product__specs">
          <div className="row"> 
            { this.generateMockData() }
          </div>
        </div>
        {/* <Purchase/> */}
        {/* <Model/> */}
      </div>
    );
  }
}

export default Product;