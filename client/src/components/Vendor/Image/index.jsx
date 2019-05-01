import React, { Component } from 'react';
import ViewImage from '../ViewImage';

import './image.scss';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className="image__creator">
        <ViewImage images={this.props.images} otherImages={this.props.otherImages}>
          {
            this.props.images.map( (image, i ) => (
              <div key={i + image.url} className={this.props.className}>
                <img className={`${i === 0 ? `image__left` : `image__right`}`} src={image.url} alt=""/>
              </div>
            ))
          }
        </ViewImage>
      </div>
    );
  }
}

export default Image;