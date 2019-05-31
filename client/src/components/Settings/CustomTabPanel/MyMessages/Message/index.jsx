import React, { Component } from 'react';

import Reply from './Reply';

import './message.scss';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = { isReplying: false }

    this._onCollapse = this._onCollapse.bind(this);
    this._onDelete = this._onDelete.bind(this);
    this._onClick = this._onClick.bind(this);
    this.toggleOnReplying = this.toggleOnReplying.bind(this);
    this._onReply = this._onReply.bind(this);
  }

  _onCollapse (e) {    
    if ( this.collapsible.contains(e.target) ) {
      return;
    }

      this.collapsible.style.height === '' ?  0 : null;
      this.collapsible.style.height = this.collapsible.clientHeight ?  0 : (`${this.wrapper.clientHeight}px`);
      this.node.style.backgroundColor =  this.collapsible.clientHeight  ? '#fff' : '#efefef';
    }
  

  _onClick (e) {
    e.stopPropagation();
  }

  _onDelete (e) {
    e.stopPropagation();

    // code
  }

  toggleOnReplying (e) {
    e.stopPropagation();

    this.replyCollapsible.style.height === '' ?  0 : null;
    this.replyCollapsible.style.height = this.replyCollapsible.clientHeight ?  0 : (`${this.replyWrapper.clientHeight}px`);
    this.collapsible.style.height = `${this.wrapper.clientHeight}px`;

    this.setState({
      isReplying: !this.state.isReplying
    })
  }

  _onReply () {
    // code
    console.log('replying lciekx')
  }

  render() {

    const { message_id, sender, topic, title, content, timestamp } = this.props.message;

    return (
      <div id="message" onClick={this._onCollapse} ref={ node => { this.node = node; }} >
        <div className="message__entry">
          <div className="message__sender">
            <input className="message__checkbox" type="checkbox" onClick={this._onClick}/>
            <div>{sender}</div>
          </div>
          <div>{topic}</div>
          <div>{title}</div>
          <div>{timestamp}</div>
        </div>
        <div className="grow" style={{ height: 0}} ref={ node => { this.collapsible = node;}}>
          <div ref={ node => { this.wrapper = node; }} >
            <div className="">
              <div className="message__view__more">
                <div className="message__content">{content}</div>
                <div  className="message__buttons">
                  { !this.state.isReplying ? <button onClick={this.toggleOnReplying}>Reply</button> : <div></div> }
                  <button onClick={this._onDelete}>Delete</button>

                </div>
              </div>
              <div className="" style={{ height: 0 }} ref={ node => { this.replyCollapsible = node; }}>
                <div style={{ width: '90%'}} ref={ node => { this.replyWrapper = node; }}>
                  <div className="message__reply">
                    <div className="message__reply__content row">
                      <h4 className="col-xs-3 col-sm-3 col-md-3">To</h4>
                      <div className="col-xs-6 col-sm-6 col-md-6" >{sender}</div>
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
                    <button onClick={this._onReply}>Reply</button>
                    <button onClick={this.toggleOnReplying}>Cancel</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;