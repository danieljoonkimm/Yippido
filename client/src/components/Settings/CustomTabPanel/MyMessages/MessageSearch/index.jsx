import React, { Component } from 'react';

import './messageSearch.scss';

class MessageSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
    this._onSearch = this._onSearch.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onSearch () {
    console.log('clicked onSearch fusnction')
    // your code;
  }

  _onChange (e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render() {
    
    return (
      <div id="message__search">
        <button>dropdown</button>
        <input name="search" onChange={this._onChange}></input>
        <button onClick={this._onSearch}>Search</button>
      </div>
    );
  }
}

export default MessageSearch;