import React, { Component } from 'react';
import './navCategory.scss';
import NavSubCategory from './navSubCategory.jsx'

// Icons
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'


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
      },
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
      },
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
      },
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
      },
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

export default class NavCategory extends Component {
  constructor() {
    super();
    this.state = {
      selectedIds: [],
      activeSub: {
        isActive: false,
        visibility: 'hidden'
      },
      subCat: [],
      subItemToggle: {
        toggle: false,
        display: 'none',
      }
    };
    
    this.toggleCategories = this.toggleCategories.bind(this);
  }  
  toggleCategories() {
    this.state.subItemToggle.toggle ? this.setState({subItemToggle: {toggle: false, display: 'none'}, activeSub: {isActive: false, visibility: 'hidden'}}) : this.setState({subItemToggle: {display: "flex", toggle: true, borderLeft: '2px solid darkGrey'}, activeSub: {isActive: true, visibility: 'visible'}})
  }
  handleSelectedId(selected, depthLevel) {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray,
      })
    }
  }

  pushCategories(categories, depthLevel = 0) {
    let subCat = [];
    categories.map(title => {
      title.categories.map(subCategories => {
      if((this.state.selectedIds[depthLevel] === subCategories.parent_id)) {
        subCat.push(subCategories);
        }
      })
    })
    // console.log(subCat, 'subcat array')
    return subCat
  }

  renderCategories(categories, depthLevel = 0) {
    return categories.map(title => {
      return <ul onClick={this.handleSelectedId(title.category_id, depthLevel)} className="category_title" key={title.category_id}>{title.name}</ul>
    })
  }

  render() {
    return(
      <div className="category_container">
        <div className="category_upper">
          {this.renderCategories(data)}
        </div>
        <div className="category_lower">
          <NavSubCategory subItems={this.pushCategories(data)} style={this.state.subItemToggle}/>
        </div>
      </div>
    )
  }
};

  // renderCategories(categories, depthLevel = 0) {
  //   let subCat = [];
  //   return categories.map(title => {
  //     title.categories.map(subCategories => {
  //       if ((this.state.selectedIds[depthLevel]) === subCategories.parent_id) {
  //         subCat.push(subCategories.name);
  //         console.log(subCat, 'hello')
  //         return subCat;
  //       }
  //     })
  //     return <ul onClick={this.handleSelectedId(title.category_id, depthLevel)}>{title.name}</ul>
  //   })
  //   return subCat;
  // }

    // return categories.map(category => {
    //   return (
    //     <div className="tooltip_container">
    //       <div className="col category_container" key={category.category_id}>
    //         <ul className="category_item" onClick={this.handleSelectedId(category.category_id, depthLevel)}>{category.name}<Icon icon={ic_keyboard_arrow_right} style={this.state.isActive}/></ul>
    //       </div>
    //       <ul className="col subCategory_container" style={this.state.subItemToggle}>
    //         {
    //           category.categories.map(name => {
    //             if((this.state.selectedIds[depthLevel] === name.parent_id)) {
    //               return (
    //                 <div className="subCategory_Con">
    //                   <ul className="col subCategory_name" key={category.parent_id}>
    //                   {name.name}
    //                   </ul>
    //                   {
    //                     name.categories.map(subName => {
    //                       return <li className="subCategory_item" key={subName.parent_id}>{subName.name}</li>
    //                     })
    //                   }
    //                 </div>
    //               )
    //             }
    //           })
    //         }
    //       </ul>
    //     </div>
    //   )
    // })