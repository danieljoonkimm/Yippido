import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";
import ReactTooltip from 'react-tooltip';


const data = [
  {
    "category_id": 1,
    "parent_id": 0,
    name: 'women',
    categories: [
      {
        "category_id": 10,
        "parent_id": 1,
        name: "tops",
        categories: [
          {
            "category_id": 20,
            "parent_id": 10,
            name: "bodysuits",
            categories: []
          },
          {
            "category_id": 21,
            "parent_id": 10,
            name: "casual",
            categories: []
          },
          {
            "category_id": 22,
            "parent_id": 10,
            name: 'dressy tops',
            categories: []
          },
        ]
      },
      {
        "category_id": 11,
        "parent_id": 1,
        name: "denim",
        categories: [
          {
            "category_id": 23,
            "parent_id": 11,
            name: "jackets & outerwear",
            categories: []
          },
          {
            "category_id": 24,
            "parent_id": 11,
            name: "jeans",
            categories: []
          },
          {
            "category_id": 25,
            "parent_id": 1,
            name: 'jumpsuit & romper',
            categories: []
          },
        ]
      }
    ]
  },
  {
  "category_id": 2,
    "parent_id": 0,
    name: 'shoes',
    categories: [
      {
        "category_id": 12,
        "parent_id": 2,
        name: 'booties',
        categories: [
        ]
      },
      {
        "category_id": 13,
        "parent_id": 2,
        name: 'boots',
        categories: [
        ]
      },
    ]
  },
  {
    "category_id": 3,
      "parent_id": 0,
      name: 'accessories',
      categories: []
  }
]



export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {

      categories: {
        name: [],

      },
      showDrowpdown: false,
      selectedIds: [],
    };
    
    // this.renderSubCategories = this.renderSubCategories.bind(this);
    // this.toggleCategories = this.toggleCategories.bind(this);
    // this.handleSelectedId = this.handleSelectedId.bind(this);
    // this.handledDropdownToggle = this.handledDropdownToggle.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.categories !== nextProps.categories
    || this.state.showDrowpdown !== nextState.showDrowpdown
    || this.state.selectedIds !== nextState.selectedIds;
  }
  handledDropdownToggle() {
    let nextState = !this.state.showDrowpdown;
    this.setState({
      showDrowpdown: nextState,
      selectedIds: []
    });
  }
  handleSelectedId(selected, depthLevel) {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray
      })
    }
  }
  renderSubCategories(options, depthLevel = 0) {
    // if (!this.state.showDrowpdown) {
    //   return null;
    // }
    // const classes = ['dropdown_options'];

    // classes.push(`dropdown_options--`)
    const menuOptions = options.map(option => {
      const display = (option.link
        ? <a href={ option.link }>{option.name}</a>
        : <span>{option.name}</span>
      );
      // hasOptions = (option.categories && option.categories.length > 0
      //   );
      //   let subMenu;

      //   if ((this.state.selectedIds[depthLevel] === option.parent_id)
      //   && hasOptions
      //   ) {
      //     const newDepthLevel = depthLevel + 1;
      //     subMenu = this.renderSubCategories(option.categories, newDepthLevel);
      //   }
        return (
          <li className="tooltip_item">
            {display}
            {subMenu}
          </li>
        );
      });
      return (
        <div className="dropdown_options">
          <ul className="tooltip_subCat" onClick={this.handleCateg}>
            {menuOptions}
          </ul>
        </div>
      );
  }


  
  toggleCategories() {

    this.state.subItemToggle.toggle ? this.setState({subItemToggle: {toggle: false, display: 'none'}}) : this.setState({subItemToggle: {display: "flex", toggle: true}})
    console.log('hello', this.state.subItemToggle.toggle);
  }
  // componentWillMount() {
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
            <div onClick={this.handledDropdownToggle}>
              {this.renderSubCategories(data)}
            </div>
            {/* <ul id="list">
              <li>{this.renderSubCategories(data)}</li>
            </ul> */}
              {/* <ul className="tooltip_subCat">
                {this.state.categories.map((category, index) => {
                  return <li className="tooltip_item" key={index} onClick={this.toggleCategories}>{category.name}</li>
                })}
              </ul>
              <ul className="tooltip_subCat_items" style={this.state.subItemToggle}>
                <ul className="col sub_item">Tops
                  <li>Bodysuits</li>
                  <li>Casual</li>
                </ul>
                <ul className="col sub_item">Denim
                  <li>Jackets & Outerwear</li>
                </ul>
                <ul className="col sub_item">Jackets/Outerwear 
                  <li>Cape & Poncho</li>
                </ul> */}
              {/* {this.state.eachCategory.map((item) => {
                return <li className="tooltip_item">{item}</li>
              })} */}
              {/* </ul> */}
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



    // categories: [
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "women",
    //     categories: [
    //       {
    //         Tops: ['Bodysuits', 'Casual', "Dressy Tops", 'Fashion Tops', 'Graphic Tees', 'Seamless', 'Shirt & Blouse', 'Tank & Tube Tops', 'T-Shirts & Polo', 'Tunics'],
    //         Denim: ['Jackets & Outerwear', 'Jeans', 'Jumpsuit & Romper', 'Shorts', 'Skirts & Dresses', 'Tops'],
    //         "Jackets/Outerwear": ['Bodysuits', 'Casual', "Dressy Tops", 'Fashion Tops', 'Graphic Tees', 'Seamless', 'Shirt & Blouse', 'Tank & Tube Tops', 'T-Shirts & Polo', 'Tunics'],
    //         "Party Dresses": ['Jackets & Outerwear', 'Jeans', 'Jumpsuit & Romper', 'Shorts', 'Skirts & Dresses', 'Tops'],
    //       }
    //     ]
    //   },
    //   {
    //     category_id: 75,
    //     parent_id: 0,
    //     name: "shoes",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   },
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "accessories",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   },
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "handbags",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   },
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "beauty",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   },
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "kids",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   },
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "men",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   },
    //   {
    //     category_id: 74,
    //     parent_id: 0,
    //     name: "others",
    //     categories: ["booties", 'boots', 'dress shoes', 'flats']
    //   }
    // ],
    // eachCategory: []

      // return <ul>{category.name}</ul>
  // console.log(sub.name)
  // return list.name.push(sub.name)
      // else {
      //   sub.categories.map(subCat => {
      //     subCat.categories.map(child => {
      //       this.handleCategories(child)
      //     })
          // this.handleCategories(subCat)
          // console.log(subCat.categories)
        // })

      // }
  // for (let i = 0; i < category.length; i++) {
  //   console.log(category[i].name)

  // }
  // if (!data.categores)