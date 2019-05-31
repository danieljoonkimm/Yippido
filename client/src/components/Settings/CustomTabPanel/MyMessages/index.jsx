import React, { Component } from 'react';


import MessageSearch from './MessageSearch';

import './myMessages.scss';
import Box from './Box';

class MyMessages extends Component {
  constructor(props) {
    super(props);

  
  }


  render() {
    const { name } = this.props;

    const messages = [];
  
    return (
      <div id="my__messages">
        <h2>{name}</h2>
        <MessageSearch/>
        <Box messages={messages} />
      </div>
    );
  }
}

export default MyMessages;