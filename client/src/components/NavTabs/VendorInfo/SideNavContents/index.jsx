import React, { Component } from 'react';

export default class SideNavContents extends Component {
  constructor(props) {
    super(props);

    // this.header = this.props.content.header;
    // this.content - this.props.content.selected;
  }
  renderContent(contents) {
    if (contents.header === "company info") {
      return this.companyInfo(contents.selected)
    }
    if (contents.header === 'FAQ') {
      return this.faq(contents.faqContents)
    }
    if (contents.header === 'Show Schedule') {
      return this.schedule(contents.selected);
    }
    if (contents.header === 'Return & Cancellation Policy') {
      return this.cancellation(contents.selected);
    }
    if (contents.header === 'Promotion') {
      return this.promotion(contents.selected);
    }
    if (contents.header === 'Size Info') {
      return this.size(contents.selected);
    }
  }
  companyInfo(info) {
    return (
      <div>
        <p>Company Info</p>
        <h1>{info.name}</h1>
        <p>{info.description_1}</p>
        <div>
          <p>{info.address}</p>
          <p>Tel: {info.phone}</p>
          <p>Fax: {info.phone}</p>
          <p>Email: {info.email}</p>
        </div>
        <p>{info.description_2}</p>
      </div>
    )
  }
  faq(info) {
    console.log(info)
    return (
      <div>
        fag
      </div>
    )
  }
  schedule(info) {
    return(
      <div>
        <p>Show Schedule</p>
        <ul className="sideNavSchedule">
          {info.map(schedules => {
            return (
              <li>
                <h1>{schedules.name}</h1>
                <p>{schedules.booth}</p>
                <p>{schedules.date}</p>
                <p>{schedules.city}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  render() {
    return(
      <div>
        {this.renderContent(this.props.contents)}
      </div>
    )
  }
}