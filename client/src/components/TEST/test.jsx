import React, {Component} from 'react';

export default class TEST extends Component {
  constructor() {
    super()
  }
  abc() {
    console.log('abc')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.abc}>hello</h1>
      </div>
    )
  }
}