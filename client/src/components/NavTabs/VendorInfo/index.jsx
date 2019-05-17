import React, { Component } from 'react';
import './vendorInfo.scss';

// Components
import SideNavContents from './SideNavContents';


const data = [
  { 
    "company info": {
      name: "Aisly Rose",
      description_1: "Young Contemporary",
      address: "149 Catalina St",
      phone: '1232143243',
      email: "john@gmail.com",
      description_2: "blah blah blah"    
    },
    FAQ: [
      {
        header: "Account",
        contents: 'blah blah blah'
      },
      {
        header: "Member Center"
      },
      {
        header: "Order"
      },
      {
        header: "Order Status",
      },
      {
        header: "Payment",
      },
      {
        header: "Shipping"
      },
      {
        header: "Return & Exchanges"
      },
      {
        header: "Refunds"
      }
    ],
    "Show Schedule": [
      {
        name: "Atlanta Americasmart1",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart2",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart3",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart4",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart5",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart6",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
    ],
    "Return & Cancellation Policy": {
      policy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Promotion": {
      promotion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Size Info": {
      "size info": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  }

]

export default class VendorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      selected: [],
      header: '',
      faqContents: [],
      child: [],
    }
  }
  pushVendorInfo(info, infos) {
    for (let key in infos) {
      if (key === info) {
        this.setState({
          selected: infos[key],
          header: info,
        })
      }
      if (key === "FAQ") {
        this.setState({faqContents: infos[key]})
        // return this.renderImmediateChild(key);
      }
    }
  }
  // handleSelectedId(selected, depthLevel) {
  //   return () => {
  //     const updatedArray = this.state.child.slice(0);

  //     updatedArray[depthLevel] = selected;

  //     this.setState({
  //       child: updatedArray,
  //     })
  //   }
  // }
  renderVendorInfoNav(vendorInfo){   
    return vendorInfo.map(infos => {
      return Object.keys(infos).map(info => {
        // if (info === "FAQ") {
          
        // }
        return (
          <ul className="infoCategories" onClick={() => this.pushVendorInfo(info, infos)}>
            {info}
          </ul>
        )
      })
    }) 
  }
  renderImmediateChild(faq) {
    return faq.map(subHeaders => {
      return <li>{subHeaders.header}</li>
    })
  }

  render() {
    return(
      <div id="vendorInfo" ref="referree">
        <div className="sideNav">
          {this.renderVendorInfoNav(data)}
          {/* {this.renderImmediateChild(this.state.faqContents)} */}
        </div>
        <div className="sideNavContents">
          <SideNavContents contents={this.state}/>
        </div>
      </div>
    )
  }
}

