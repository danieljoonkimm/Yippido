import React, { Component } from 'react';

import ViewImage from '../ViewImage';

import './productImage.scss';

class ProductImage extends Component {
  constructor(props) {
    super(props);

    this.default = ['product__default']; 
    this.duo = ['product__duo-left', 'product__duo-right'];
    this.quad = ['product__quad-topLeft', 'product__quad-topRight', 'product__quad-botLeft', 'product__quad-botRight'];

    this._generateViewImages = this._generateViewImages.bind(this);
  }

  _generateViewImages (images) {
    return images.map( (image, i ) => (
      <div key={i + image.url} className={this.props.className} >
        <img  className={this[this.props.name][i]} src={image.url} alt=""/>
        { this.props.isDeletable ? (<div data-id={image.id} onClick={this.props.onClick} className="img__btn__overlay">x</div> ) : null }
      </div>
    ));
  }

  render() {
    console.log(this.props.isViewable)
    const products = this.props.isViewable ? (
      <ViewImage images={this.props.images} otherImages={this.props.otherImages}>
        { this._generateViewImages(this.props.images) }
      </ViewImage>
    ) : (
      <div>
        { this._generateViewImages(this.props.images) }
      </div>
    );
    return (
      <div>{products}</div>
    );
  }
}

export default ProductImage;