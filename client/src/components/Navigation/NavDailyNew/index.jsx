import React, { Component } from 'react';
import './navDailyNew.scss';

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
const images = ["https://dummyimage.com/400x600/26628a/fff", 'https://dummyimage.com/400x600/26628a/fff'];


export default class NavDailyNew extends Component {
  constructor() {
    super();
  }
  renderCategories(category) {
    return category.map(categories => {
      return <li className="dailyNew_categories" key={categories.category_id}>{categories.name} <span className="item_count">(500)</span></li>
      console.log(categories, 'daily new')
    })
  }

  render() {
    return(
      <div className="container" id="navDailyNew_container">
        <h1 className="nav_title">NEW Items <span className="item_count">(1500)</span></h1>
        <div className="row navVendor_container">
          <div className="col-xs-6 col-sm-6 col-md-6 navDailynew_left">
            <ul >
              {this.renderCategories(data)}
            </ul>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 navDailyNew_right">
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
}