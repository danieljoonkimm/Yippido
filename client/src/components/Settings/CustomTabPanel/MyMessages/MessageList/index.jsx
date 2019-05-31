import React, { Component } from 'react';
import { each } from 'lodash'
import Message from '../Message';

import './messageList.scss';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  generateMessages () {
    let messages = [];

    for ( let i = 0; i < 10; i++ ) {
      messages.push(
        {
          message_id: i,
          sender: 'Andrea Bihoux',
          topic: 'Product',
          title: 'Welcome! and Vsiti bag boutique!',
          content: 'ajsdflk;adjsasdf;kasdf;asdf;lasdkfl;aksd;lfkslad;fk;asdkflkas;dlfk;lasdkfds;lfkasld;fkasdf;lksf;lskfjaeiojfdslk m;asdkfjasejflkaen fljsdlk ajfueoai jclsadf ajs',
          timestamp: new Date().toLocaleString(),
        }
      );
    }

    return messages;
  }

  _onDeleteAllMessages () {
    const checkboxes = document.getElementsByClassName('message__checkbox');
    let deleteMessages = [];

    each( checkboxes, (checkbox) => {
      console.log(checkbox)
      checkbox.checked ? deleteMessages.push(checkbox) : null;
    });
   
    console.log(deleteMessages)
    // do something with ids to batch delete;
  }

  _selectAllMessages (e) {
    const checkboxes = document.getElementsByClassName('message__checkbox');
  
    each( checkboxes, (checkbox) => {
      checkbox.checked = e.target.checked;
    });
  }

  render() {
    const messages = this.generateMessages().map( message => ( <Message key={`message__entry${message.message_id}`} message={message}/> ))
    
    return (
      <div id="message__list">
  
        <div className="message__list__nav">
          <div>Sender</div>
          <div>Topic</div>
          <div>Title</div>
          <div>Received</div>
        </div>
        <div className="message__list__messages">
          { messages }
        </div>
        <div className="message__list__delete__all">
          <input type="checkbox" onClick={this._selectAllMessages}/>
          <button onClick={this._onDeleteAllMessages}>Delete All</button>
        </div>
      </div>
    );
  }
}

export default MessageList;