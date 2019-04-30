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
  constructor() {
    super();

    this.state = {
      subItemToggle: {
        display: 'none',
        toggle: false
      },
    }
    this.toggleCategories = this.toggleCategories.bind(this);
    // this.renderSubCategories = this.renderSubCategories.bind(this);
  }
  // componentDidMount() {
  //   console.log(

  //     this.renderSubCategories(data)
  //   )
  // }
  toggleCategories() {

    this.state.subItemToggle.toggle ? this.setState({subItemToggle: {toggle: false, display: 'none'}}) : this.setState({subItemToggle: {display: "flex", toggle: true}})
    console.log('hello', this.state.subItemToggle.toggle);
  }
  renderSubCategories(options, depthLevel = 0) {
    const menuOptions = options.map(option => {
      const display = (option.link
        ? <a href={ option.link }>{option.name}</a>
        : <span>{option.name}</span>
      );
      console.log(option.name, display)
      let subMenu;
      if (options.categories && options.categories.length > 0) {
        subMenu = this.renderSubCategories(options.categories)
      }
    return (
      <li className="tooltip_item" onClick={this.toggleCategories}> 
        {display}
        {subMenu}
        {/* hello */}
      </li>
    );
  });
  return (
    <div className="dropdown_options">
      <ul className="tooltip_subCat" >
        {/* hello */}
        {menuOptions}
      </ul>
    </div>
  );
}

  render() {
    return(
      <div>
        <div id="navbar-desktop">
          <ul className="navbar-item">
            <li className="bm-item-list" data-tip data-for='test' data-event='click focus'>Categories</li>
            <ReactTooltip id='test' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
            role='example' effect="solid" border="true" className="navbar_tooltip"
            clickable={true} scrollHide={false}>
            <div>
              {this.renderSubCategories(data)}
            </div>
            </ReactTooltip>
            <li className="bm-item-list">Vendors</li>
            <li className="bm-item-list">Daily New</li>
            <li className="bm-item-list">Best Seller</li>
            <li className="bm-item-list">Sale</li>
            <li className="bm-item-list">Look Book</li>
          </ul>
        </div>
      </div>
    )
  }
};
