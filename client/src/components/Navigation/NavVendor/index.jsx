import React, { Component } from 'react';
import './navVendor.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_favorite_border} from 'react-icons-kit/md/ic_favorite_border';


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
      vendor_id: [],
      letters: []
    }
    // this.matchVendor = this.matchVendor.bind(this);
    this.renderVendor = this.renderVendor.bind(this);
  }

  componentDidMount() {
    // console.log(this.state.letters, 'state')
    this.renderVendor();
  }

  renderVendor() {
    let alphabet, letters = [], chunk = 8, temp = [];
    for (let i = 0; i < 26; i++) {
      alphabet = String.fromCharCode(i + 65)
        letters.push(alphabet);
      }
      letters.push('0-9', <Icon icon={ic_favorite_border}/>, "All Vendor List")
      console.log(letters)
    for (let k = 0, j = letters.length; k < j; k += chunk) {
      temp.push(letters.slice(k, k+chunk));
      // console.log(temp)
      this.setState({
        letters: temp
      })
    }
  }
  
  matchVendor(e) {
    
    console.log(e.target.getAttribute("letter[i]"), 'yolo')
  }
  // targetVendor() {
  //   console.log('targer acquired')
  // }
    // let alphabet = this.state.letters;
    // for (let i = 0; i < alphabet.length; i++) {

    // }
    // let vendorLetter;
    // data.map(vendor => {
    //   vendorLetter = vendor.name.slice(0, 1);
    //   for (let i = 0; i < alphabet.length; i++) {
    //     if (vendorLetter === alphabet[i]) {
    //       this.state.vendor_id.push(vendor.manufacturer_id)
    //       // this.setState({vendor_id: [vendor.manufacturer_id]})
    //       console.log(alphabet[i], vendorLetter, this.state.vendor_id)
    //     }

    //   }
    //   // console.log(vendor.name.slice(0,1))
    // })
  
  getVendor() {

  }

  render() {
    return(
      <div className="container" id="navVendor_container">
        <h1 className="navVendor_title">Find Vendor</h1>
        <div className="row navVendor_container">
          <div className="col-xs-7 col-sm-7 col-md-7 navVendor_left"  >
            <select name="" id="" className="navSelect"><option value="">Select Vendor</option></select>
            <div >
              {
                this.state.letters.map((letter, j) => {
                  return <ul className="alphabet_container" key={j}>
                    {
                      letter.map((alphabet, i) => {
                        return <li className="letters" key={letter[i]} onClick={this.matchVendor.bind(this)}>{alphabet}</li>
                      })
                    }</ul>
                })
              }
            </div>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 navVendor_right">
            <div className="navVendor_Image_container">
              {
                images.map( (image, i ) => (
                  <div key={i + image} className="col-xs-6 navVendor_image">
                    <img className={`${i === 0 ? `image__left` : `image__right`}`} src={image} alt=""/>
                  </div>
                ))
              }              
            </div>
            <div className="row navVendor_description">
              <div className="col-xs-6 nav_description">T12048</div>
              <button className="col-xs-6 navShop">Shop Now</button>
              <div className="col-xs-6 nav_description">Bluelemon</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};