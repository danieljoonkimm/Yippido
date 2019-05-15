import React, { Component } from 'react';

export default class SideNavContents extends Component {
  constructor(props) {
    super(props);

  }
  renderContent(contents) {
    // let contents = this.props.contents;
    console.log(contents, 'child')
    // for (let i = 0; i < contents.length; i++) {
    //   console.log(contents[i])
    //   // console.log(contents[i])
    // }
  }
  companyInfo() {
    
  }
  render() {
    return(
      <div>
        {this.renderContent(this.props.contents)}
      </div>
    )
  }
}