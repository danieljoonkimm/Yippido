import React, { Component } from 'react';

import Modal from '../../globals/Modal';

import './viewImage.scss';



class ViewImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal (e) {
    if (e && this.state.showModal && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
  
    const showModal = this.state.showModal ? (
      <Modal>
        <div className="view-image-wrapper" onClick={this.toggleModal}>
          <div className="view-image-container" ref={ node => { this.node = node; }}>
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators view">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <img src={this.props.images[0].url} alt="..."/>
                  </div>
                  <div  className="col-xs-6 col-sm-6 col-md-6">
                    <img src={this.props.images[1].url} alt="..."/>
                  </div>
                </div>
              </li>
              {
                this.props.otherImages.map( (images, i) => {
                  return (
                    <li data-target="#carousel-example-generic" data-slide-to={i + 1}>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <img src={images[0].url} alt="..."/>
                        </div>
                        <div  className="col-xs-6 col-sm-6 col-md-6">
                          <img src={images[1].url} alt="..."/>
                        </div>
                      </div>
                    </li>
              
                  )
                })
              }
            </ol>


            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <img src={this.props.images[0].url} alt="..."/>
                  </div>
                  <div  className="col-xs-6 col-sm-6 col-md-6">
                    <img src={this.props.images[1].url} alt="..."/>
                  </div>
                </div>
             
                
              </div>
              {
                this.props.otherImages.map( images => {
                  return (
                    <div className="item">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <img src={images[0].url} alt="..."/>
                        </div>
                        <div  className="col-xs-6 col-sm-6 col-md-6">
                          <img src={images[1].url} alt="..."/>
                        </div>
                      </div>
                    
                    </div>
                  )
                })
              }
          
            </div>


            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="">
        <div className="ViewImage" onClick={this.toggleModal}>
          { this.props.children }
        </div>
        {showModal}
      </div>
    );
  };
}

export default ViewImage;