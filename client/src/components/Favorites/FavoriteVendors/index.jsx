import React, { Component } from 'react';

import ProductImage from '../../Vendor/ProductImage';

import './favoriteVendors.scss';

class FavoriteVendors extends Component {
  constructor(props) {
    super(props);


    this.images = [
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff' },
        { url: 'https://dummyimage.com/400x600/9b192e/#fff' }
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff' },
        { url: 'https://dummyimage.com/400x600/9b192e/#fff' }
      ],
      [
        { url: 'https://dummyimage.com/400x600/929ded/#fff' },
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff' }
      ],
    ];
  }

  generateMockData() {
    let mock = [];
    const item = {
      name: 'L5748925',
      price: '32'
    }

    for (let i = 0; i < 5; i++) {
      mock.push(
        <div style={{ backgroundColor: i % 2 === 0 ? '#efefef' : '#fff'}}>
          <div className="container" style={{ padding: '30px 0'}}>
            <div className="favorite__actions row">
              <div className="favorite__actions__title col-xs-6 col-sm-6 col-md-6">
                <h2 className="">Red Ribbon Rose</h2>
              </div>
              <div className="favorite__action__btns col-xs-6 col-sm-6 col-md-6">
                <button>Go Shop</button>
                <button>Delete</button>
              </div>
            </div>

            <div className="row">
              {
                this.images.map(image => {
                  return (
                    <div className="col-xs-4 col-sm-4 col-md-4" style={{ padding: '8px' }}>
                      <ProductImage
                        name="duo"
                        className="col-xs-6 col-sm-6 col-md-6"
                        images={image}
                        isViewable={false}
                        isDeletable={false}
                      />
                      <div style={{ padding: '5px 0', display: 'flex'}}>
                        <div>{item.name} / ${item.price}</div>
                      </div>
                    </div>
                  );
                })
              }
            </div>

          </div>
        </div>
      )
    }

    return mock;
  }

  render() {
    return (
      <div id="favorite__vendors">
        { this.generateMockData() }
        
      </div>
    );
  }
}

export default FavoriteVendors;