import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";
import ReactTooltip from 'react-tooltip';


export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      subItemToggle: {
        display: 'none',
        toggle: false
      },
      // subItemToggel: false,

      categories: [
        {
          category_id: 74,
          parent_id: 0,
          name: "women",
          categories: [
            {
              Tops: ['Bodysuits', 'Casual', "Dressy Tops", 'Fashion Tops', 'Graphic Tees', 'Seamless', 'Shirt & Blouse', 'Tank & Tube Tops', 'T-Shirts & Polo', 'Tunics'],
              Denim: ['Jackets & Outerwear', 'Jeans', 'Jumpsuit & Romper', 'Shorts', 'Skirts & Dresses', 'Tops'],
              "Jackets/Outerwear": ['Bodysuits', 'Casual', "Dressy Tops", 'Fashion Tops', 'Graphic Tees', 'Seamless', 'Shirt & Blouse', 'Tank & Tube Tops', 'T-Shirts & Polo', 'Tunics'],
              "Party Dresses": ['Jackets & Outerwear', 'Jeans', 'Jumpsuit & Romper', 'Shorts', 'Skirts & Dresses', 'Tops'],
            }
          ]
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "shoes",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "accessories",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "handbags",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "beauty",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "kids",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "men",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "others",
          categories: ["booties", 'boots', 'dress shoes', 'flats']
        }
      ],
      eachCategory: []
    };

    this.handleCategories = this.handleCategories.bind(this);
    
  }

  handleCategories() {
    this.state.subItemToggle.toggle ? this.setState({subItemToggle: {toggle: false, display: 'none'}}) : this.setState({subItemToggle: {display: "flex", toggle: true}})
    console.log('hello', this.state.subItemToggle.toggle);
    // let catergory = this.state.categories;
    // console.log(catergory.shoes)
      // {
      //   this.state.categories.map(categories => {
      //     categories.categories.map(item => {
      //       let categoryName = item;
      //       this.state.eachCategory.push(item)
      //     })
      //   });
      // }
  }
  // componentWillMount() {
  //   this.handleCategories();
  // }
  render () {
    return (
      <div>
        <div id="navbar-desktop">
          <ul className="navbar-item">
            <li className="bm-item-list" data-tip data-for='test' data-event='click focus'>Categories</li>
            <ReactTooltip id='test' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
            role='example' effect="solid" border="true" className="navbar_tooltip"
            clickable={true} scrollHide={false}>
              <ul className="tooltip_subCat">
                {this.state.categories.map((category, index) => {
                  return <li className="tooltip_item" key={index} onClick={this.handleCategories}>{category.name}</li>
                })}
              </ul>
              <ul className="tooltip_subCat_items" style={this.state.subItemToggle}>
                <ul>Tops
                  <li>Bodysuits</li>
                  <li>Casual</li>
                </ul>
                <ul>Denim
                  <li>Jackets & Outerwear</li>
                </ul>
                <ul>Jackets/Outerwear 
                  <li>Cape & Poncho</li>
                </ul>
              {/* {this.state.eachCategory.map((item) => {
                return <li className="tooltip_item">{item}</li>
              })} */}
              </ul>
            </ReactTooltip>
            <li className="bm-item-list">Vendors</li>
            <li className="bm-item-list">Daily New</li>
            <li className="bm-item-list">Best Seller</li>
            <li className="bm-item-list">Sale</li>
            <li className="bm-item-list">Look Book</li>
          </ul>
        </div>
      </div>
    );
  }
};
  {/* <ol>{this.state.eachCategory.map( (category) => {
  return <li><a href="#menu" className="bm-item-list">{category}</a></li>
})}</ol> */}
{/* <Menu right id="burger" width={"80%"}>
  <nav className="nav">
    <ul>
      <li><a href="#home" className="bm-item-list" onClick={this.handleCategories}>Categories</a>
    <ol>
      {this.state.categories.map((category) => 
        <li>{category}</li>
      )}
    </ol>
      </li>
      <li><a href="#menu" className="bm-item-list">Vendors</a></li>
      <li><a href="#location" className="bm-item-list">Daily New</a></li>
      <li><a href="#gallery" className="bm-item-list">Best Seller</a></li>
      <li><a href="#contact" className="bm-item-list">Sale</a></li>
      <li><a href="#contact" className="bm-item-list">Look Book</a></li>

    </ul>
  </nav>
</Menu> */}

// dynamically render parent categories 
// based on response, map those subcategories 
// every value is a state acquired from the response
                {/* {response.map(category => {
                  <li><a href="#home" className="bm-item-list">category</a></li>
                })} */}



{/* <navbar onClick={RTCIceCandidatePairChangedEvent.bind(this)}>
  <categories onClick={}>

  </categories>
</navbar>

showNavBar = () => {
  axios.get(`/api/navbar/categories/${categoryNames}`)
  Response.data.categoryNames.subCategories
  data = {
    categories = {
      womens = {
        booties
        boots
      },
      shoes
    }
  }
  
}

<navbar onClick={RTCIceCandidatePairChangedEvent.bind(this)}>
  <categories onClick={}>

  </categories>
</navbar>

showNavBar = () => {
  axios.get(`/api/navbar/categories/${categoryNames}`)
  Response.data.categoryNames.map( (category) => {
    return <li>{category}</li>
  })
  }
  onhover() {
    Response.data.categorynames.subCategories.map( (subCategory) => {
      return <li>{subCategory}</li>
    })
  }
} */}

