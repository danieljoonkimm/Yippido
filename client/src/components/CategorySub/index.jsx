import React, { Component } from 'react';

import ItemList from './ItemList';

import '../CategoryMain/CategoryBanner/categoryBanner.scss';
import './subCategory.scss';

class CategorySub extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const subCategory = { name: 'Tops', size: 2542}
    return (
      <div id="CategorySub">
        <div style={{ backgroundColor: "#efefef" }}>
          <div className="category-title subCategory">

              <h1>Women</h1>
              <div className="category-dropdown-menus">
                <div className="btn-group category-dropdown-btns">
                  <button type="button" className="btn btn-default dropdown-toggle category-dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Women Category <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu category-dropdown">
                    <li><a href="#">Women Category</a></li>
                  </ul>
                </div>
                <div className="btn-group category-dropdown-btns">
                  <button type="button" className="btn btn-default dropdown-toggle category-dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Women Vendors <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu category-dropdown">
                    <li><a href="#">Women Vendors</a></li>
                  </ul>
                </div>
                <div className="btn-group category-dropdown-btns">
                  <button type="button" className="btn btn-default dropdown-toggle category-dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Look Book <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu category-dropdown">
                    <li><a href="#">Look Book</a></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <div className="container" className="subCategory" style={{ backgroundColor: "#fff" }}>
        
          <div>{subCategory.name} ({subCategory.size} items)</div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <div class="dropdown" style={{ width: "300px",}}>
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" style={{ width: "300px"}} aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <nav aria-label="Page navigation" style={{ width: "250px"}} >
              <ul class="pagination" style={{ display: "flex", flexDirection:"row"}} >
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="dropdown" style={{ width: "300px",}}>
              SORT BY:  
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" style={{ width: "300px"}} aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="dropdown" style={{ width: "300px",}}>
            ITEMS PER PAGE  
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" style={{ width: "300px"}} aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          </div>

        <ItemList/>
            
        </div>
      </div>
    );
  }
}

export default CategorySub;