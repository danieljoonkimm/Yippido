import React, { Component } from 'react';
import './vendorInfo.scss';

// Components
import SideNavContents from './SideNavContents';


const data = [
  { 
    "company info": {
      name: "Aisly Rose",
      description_1: "Young Contemporary",
      addres: "149 Catalina St",
      phone: '1232143243',
      emai: "john@gmail.com",
      description_2: "blah blah blah"    
    },
    FAQ: [
      {
        header: "Account",

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
        name: "Atlanta Americasmart",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart",
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

    this.state = { selected: [] }
  }
  pushVendorInfo(info, infos) {
    for (let key in infos) {
      if (key === info) {
        this.setState({
          selected: infos[key]
        })
      }
    }
  }

  renderVendorInfoNav(vendorInfo){   
    return vendorInfo.map(infos => {
      return Object.keys(infos).map(info => {
        return <ul className="infoCategories" onClick={() => this.pushVendorInfo(info, infos)}>{info}</ul>
      })
    }) 
  }

  render() {
    return(
      <div id="vendorInfo" ref="referree">
        <div className="sideNav">
          {this.renderVendorInfoNav(data)}
        </div>
        <div className="sideNavContents">
          <SideNavContents contents={this.state.selected}/>
        </div>
      </div>
    )
  }
}

