import React, { Component } from 'react';

import MessageList from '../MessageList';
import ComposeMail from '../ComposeMail';

import './box.scss';

class Box extends Component {
  constructor(props) {
    super(props);
  }

  generateMessages () {

  }

  render() {
    return (
      <div id="box">
        <div className="compose__mail">
          <ComposeMail/>
        </div>
        <MessageList/>
      </div>
    );
  }
}

export default Box;