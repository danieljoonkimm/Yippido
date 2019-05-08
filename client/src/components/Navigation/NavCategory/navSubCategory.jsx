import React, { Component } from 'react';
import './navCategory.scss';

export default class NavSubCategory extends Component {
  constructor(props) {
    super(props);

  }
  renderSubCategories() {
    let category = this.props.subItems;
    return category.map(subCategory => {
      return subCategory.categories.map(child => {
        return (
          <ul className="subCategory_name">{subCategory.name}
            <li className="subCategory_item">
              {child.name}
            </li>
          </ul>
        )
      })
    })
  }
  // renderSubCategories() {
  //   let category = this.props.subItems;
  //   return category.map(subCategory => {
  //     console.log(subCategory)
  //     return (<ul><li className="subCategory_name" key={subCategory.category_id}>{subCategory.name}
  //       {subCategory.categories.map(child => {
  //         console.log(child.name)
  //         return <li key={child.category_id} className="subCategory_item">{child.name}</li>
  //       })}
  //       </li></ul>)
  //   })
  // }

  render() {
    let category = this.props.subItems;
    return(
      <div>
       {this.renderSubCategories(category)}
      </div>
    )
  }
}