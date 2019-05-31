import React, { Component } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';

import ProductImage from '../../Vendor/ProductImage';

import "@brainhubeu/react-carousel/lib/style.css";
import './carousel.scss';

class CarouselImages extends Component {
  constructor(props) {
    super(props);


   this.images = [
    [
      { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
    ],
    [ 
      { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
    ],
  ];

    this.state = { value: 0 }

    this.slides = [
      (
        <ProductImage 
          className="col-xs-6 col-sm-6 col-md-6" 
          name={'duo'}
          images={this.images[0]} 
          isViewable={false}
        />
      ),
      (
        <ProductImage 
          className="col-xs-6 col-sm-6 col-md-6" 
          name={'duo'}
          images={this.images[1]} 
          isViewable={false}
        />
      ),
    ]

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const { _onCollapse } = this.props;

    const collapsibleBtn = _onCollapse ? ( <button onClick={this.props._onCollapse}>View All</button> ) : null;

    return (
      <div style={{ padding: '0 20px 0 0' }}> 
        <Carousel
          onChange={this.onChange}
          slidesPerScroll={1}
          centered
          value={this.state.value}
          slides={this.slides}
          arrowLeft={  <i  className="fas fa-chevron-left custom-arrow-left"></i> }
          arrowRight={  <i   className="fas fa-chevron-right custom-arrow-right"></i>}
          addArrowClickHandler 
        />
        {/* <Dots 
          number={this.thumbnails.length} 
          thumbnails={this.thumbnails}
          value={this.state.value} 
          onChange={this.onChange} 
          number={this.slides.length} 
        /> */}
      <div className="carousel__actions">
        <div className="view__more">
          { collapsibleBtn }
         </div>
        <div className="current__slide">{this.state.value + 1} / {this.images.length}</div>
      </div>
    </div>
    );
  }
}

export default CarouselImages;