import React, { Component } from 'react';
import './navVendor.scss';

const data = [
  {
    "manufacturer_id": 8,
    "name": "Apple",
    "sort_order": 0,
    "image": "",
    "original_image": ""
  },
  {
    "manufacturer_id": 9,
    "name": "Canon",
    "sort_order": 0,
    "image": "http://opencart3-simple.api.opencart-api.com/image/cache/catalog/demo/canon_logo-100x100.jpg",
    "original_image": "http://opencart3-simple.api.opencart-api.com/image/catalog/demo/canon_logo.jpg"
  },
];
const images = ["https://dummyimage.com/400x600/26628a/fff", 'https://dummyimage.com/400x600/26628a/fff']

export default class NavVendor extends Component {
  constructor() {
    super();

    this.state = {
      alphabet: 65,
      vendor_id: [],
      lettersFinal: []
    }
  }
  componentWillMount() {
    // this.matchVendor();
    this.renderVendor();
  }

renderVendor() {
  let alphabet, letters = [], chunk = 8, temp = [];
  for (let i = 0; i < 26; i++) {
    alphabet = String.fromCharCode(i + 65)
      letters.push(alphabet);
    }
  for (let k = 0, j = letters.length; k < j; k += chunk) {
    temp.push(letters.slice(k, k + chunk))
  }

  return temp.map(letter => {
    return <ul className="row alphabet_container">{letter.map(ag => {
      return <li className="col-xs-12 letters">{ag}</li>})
      }</ul>
  })
}
  // letters.map( (letters) => {
  //   return <div className="row">
  //     <div className="col-xs-12">
  //       for(var i = 0; i<8; i++) {
  //         {letters}
  //       }
  //     </div>
  //   </div>
  // })

      // for (let i = 0; i < 4; i++) {
      //   console.log(str[i])
      // }
  
  // matchVendor() {
  //   let vendorLetter;
  //   data.map(vendor => {
  //     vendorLetter = vendor.name.slice(0, 1);
  //     for (let i = 0; i < alphabet.length; i++) {
  //       if (vendorLetter === alphabet[i]) {
  //         this.state.vendor_id.push(vendor.manufacturer_id)
  //         // this.setState({vendor_id: [vendor.manufacturer_id]})
  //         console.log(alphabet[i], vendorLetter, this.state.vendor_id)
  //       }

  //     }
  //     // console.log(vendor.name.slice(0,1))
  //   })
  // }
  getVendor() {

  }

  render() {
    return(
      <div className="container" id="navVendor_container">
        <h1>Find Vendor</h1>
        <div className="row navVendor_container">
          <div className="col-7 navVendor_left">
            <select name="" id="" className="row left"><option value="">Select Vendor</option></select>
              {this.renderVendor()}
          </div>
          <div className="col-5 navVendor_right">
              <div>
                <img src={images[0]} alt="" className="navVendor_image"/>
              {/* {
                images.map( (image, i ) => (
                  <div key={i + image.url} className={this.props.className}>
                    <img className={`${i === 0 ? `image__left` : `image__right`}`} src={image.url} alt=""/>
                  </div>
                ))
              }               */}
              </div>
          </div>
        </div>
      </div>
    )
  }
}