import React, { Component } from 'react';

export default class NavSubCategory extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log(this.props.subItems)

  }
  renderSubCategories() {
  }

  render() {
    let category = this.props.subItems;
    return(
      <div>
       <ul className="col subCategory_container" style={this.props.subItemToggle}>
          {
            category.categories.map(name => {
              {/* if((this.props.selectedIds[this.props.depthLevel] === name.parent_id)) { */}
                return (
                  <div className>
                    <ul className="col subCategory_name" key={category.parent_id}>
                    {name.name}
                    </ul>
                    {/* {
                      name.categories.map(subName => {
                        return (
                          <div>
                            <li className="subCategory_item" key={subName.parent_id}>{subName.name}</li>
                          </div>
                        )
                      })
                    } */}
                  </div>
                )
              {/* } */}
            })
          }
        </ul>
      </div>
    )
  }
}