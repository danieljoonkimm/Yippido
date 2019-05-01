import React, { Component } from 'react';

import './image.scss';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="image__creator">
        {
          this.props.images.map( (image, i ) => (
            <div key={i + image.url } className={this.props.className}>

              <img type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" className={`${i === 0 ? `image__left` : `image__right`}`} src={image.url} alt=""/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Image;