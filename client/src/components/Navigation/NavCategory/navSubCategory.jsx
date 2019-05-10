import React, { Component } from 'react';
import './navCategory.scss';

export default class NavSubCategory extends Component {
  constructor(props) {
    super(props);

  }
  pushSubCategories(category) {
    let childCat = [];
    category.map(subCategory => {
      childCat.push(subCategory);    
    })
    return childCat;
  }
  renderSubCategories() {
    let category = this.pushSubCategories(this.props.subItems);
    return category.map(subCategory => {
      return (
        <ul className={"subCategory_name " + (subCategory.categories.length > 0  ? 'group' : 'single') }>
          <ul key={subCategory.category_id}>{subCategory.name}
          {subCategory.categories.map(child => {
            return <li key={child.category_id} className="subCategory_item">{child.name}</li>
          })}
          </ul>
        </ul>
      )
    })
  }

  render() {
    let subCat, category = this.pushSubCategories(this.props.subItems);
    for (let i = 0; i < category.length; i++) {
      subCat = category[i].categories.length;
      console.log(subCat, 'index')
    }
    return(
      <div className={"subCategory_container " + (subCat > 0 ? 'groupContainer' : 'singleContainer')}>
       {this.renderSubCategories()}
      </div>
    )
  }
}
