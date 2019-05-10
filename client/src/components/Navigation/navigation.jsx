import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";
import ReactTooltip from 'react-tooltip';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down'





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
      selectedIds: [],
      subItemToggle: {
        display: 'none',
        toggle: false
      },
      hasCaret: true
    }
    this.toggleCategories = this.toggleCategories.bind(this);
    // this.renderSubCategories = this.renderSubCategories.bind(this);
  }
  toggleCategories() {
    this.state.subItemToggle.toggle ? this.setState({subItemToggle: {toggle: false, display: 'none'}}) : this.setState({subItemToggle: {display: "flex", toggle: true}})
  }

  handleSelectedId(selected, depthLevel) {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray
      })
      console.log(this.state.selectedIds)
    }
  }
  renderDisplay() {
    const classes = classNames({
      'dropdown_display': true,

    })
  }

  renderSubCategories(options, depthLevel = 0) {
    const menuOptions = options.map(option => {
      const display = <ul className="tooltip_item">{option.name}</ul>,

      hasSub = (option.categories && option.categories.length > 0);

      let subMenu;

      if ((this.state.selectedIds[depthLevel] === option.category_id) 
      && hasSub) {
        const newDepthLevel = depthLevel + 1;
        subMenu = this.renderSubCategories(option.categories, newDepthLevel)
      }

    return (
      <div>
        <ul className="tooltop_subCat" key={option.parent_id} onMouseEnter={
          this.handleSelectedId(option.category_id, depthLevel)
        }> 
          {display}
        </ul>
        <ul className="tooltip_subCat_items">
          <ul className="col sub_group">
            {subMenu}
          </ul>
        </ul>

      </div>
    );
  });
  return (
    <div>
        {menuOptions}
    </div>
  );
}

  render() {
    return(
      <div>
        <div id="navbar-desktop">
          <ul className="navbar-item">
            <li className="bm-item-list" data-tip data-for='test' data-event='click focus'>Categories<Icon icon={ic_arrow_drop_down}/></li>
            <ReactTooltip id='test' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
            effect="solid" border="true" className="navbar_tooltip"
            clickable={true} scrollHide={false}>
              {this.renderSubCategories(data)}
            </ReactTooltip>
            <li className="bm-item-list">Vendors<Icon icon={ic_arrow_drop_down}/></li>
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
