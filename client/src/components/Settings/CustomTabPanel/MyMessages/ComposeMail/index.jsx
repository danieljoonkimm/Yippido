import React, { Component } from 'react';

import Modal from '../../../../globals/Modal';

import './composeMail.scss';

class ComposeMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this._onSend = this._onSend.bind(this);

    
  }

  _onSend () {

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
        <div className="compose-mail-wrapper " onClick={this.toggleModal}>
          <div className="compose-mail-container" ref={ node => { this.node = node; }}>
            <h1>New Message</h1>
            <div>
              <div className="message__reply">
                <div className="message__reply__content row">
                  <h4 className="col-xs-3 col-sm-3 col-md-3">To</h4>
                  <input className="col-xs-6 col-sm-6 col-md-6" type="text"/>
                </div>
                <div className="message__reply__content row">
                  <h4 className="col-xs-3 col-sm-3 col-md-3">Title</h4>
                  <input className="col-xs-6 col-sm-6 col-md-6" type="text"/>
                </div>
                <div className="message__reply__content row">
                  <h4 className="col-xs-3 col-sm-3 col-md-3">Message</h4>
                  <textarea className="col-xs-6 col-sm-6 col-md-6" type="text"/>
                </div>
                <div className="message__reply__content row">
                  <h4 className="col-xs-3 col-sm-3 col-md-3">Attachments</h4>
                  <button className="col-xs-6 col-sm-6 col-md-6">Choose File</button>
                </div>
              </div>
              <div className="message__reply__buttons">
                <button onClick={this._onSend}>Send</button>
                <button onClick={() => { this.toggleModal()} }>Cancel</button>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="">
        <div className="composeMail" onClick={this.toggleModal}>
          <button>Compose Mail</button>
        </div>
        {showModal}
      </div>
    );
  };
}

export default ComposeMail;
