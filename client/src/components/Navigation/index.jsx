import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";


// const categories = {
//   women: {
//     women1: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80",
//     women2: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80",
//     women3: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80"
//   },
//   shoes: {
//     booties: "shoes",
//     boots: "test",
//     dress_shoes: "test1"
//   },
//   accessories: {
//     glasses: "test"
//   },
//   beauty: {
//     blank: "blank"
//   },
//   kids: {
//     blank: "blank"
//   },
//   men: {
//     blank: "blank"
//   },
//   others: {
//     blank: "blank"
//   }
// }

export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      // categories: [{women: }]
      // categories:[
      //   {women: {
      //     women1: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80",
      //     women2: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80",
      //     women3: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80"
      //   }},
      // { shoes: {
      //     booties: "shoes",
      //     boots: "test",
      //     dress_shoes: "test1"
      //   }},
      //  { accessories: {
      //     glasses: "test"
      //   }},
      //  { beauty: {
      //     blank: "blank"
      //   }},
      // {  kids: {
      //     blank: "blank"
      //   }},
      //  { men: {
      //     blank: "blank"
      //   }},
      //  { others: {
      //     blank: "blank"
      //   }}

      // ]
    }

    this.handleCategories = this.handleCategories.bind(this);
    
  }

  handleCategories() {
    let catergory = this.state.categories;
    console.log(catergory.shoes)
  }
  render () {

    // let { categories } = this.state;
    return (
      <div>
        <Menu right id="burger" width={"80%"}>
          <nav className="nav">
            <ul>
              <li><a href="#home" className="bm-item-list" onClick={this.handleCategories}>Categories</a>
            {/* <ol>
              {this.state.categories.map((category) => 
                <li>{category}</li>
              )}
            </ol> */}
              </li>
              <li><a href="#menu" className="bm-item-list">Vendors</a></li>
              <li><a href="#location" className="bm-item-list">Daily New</a></li>
              <li><a href="#gallery" className="bm-item-list">Best Seller</a></li>
              <li><a href="#contact" className="bm-item-list">Sale</a></li>
              <li><a href="#contact" className="bm-item-list">Look Book</a></li>

            </ul>
          </nav>
        </Menu>
        {/* <div id="navbar-desktop">
            <ul className="navbar-item">
              <li><a href="#home" className="bm-item-list">Categories</a></li>
              <li><a href="#menu" className="bm-item-list">Vendors</a></li>
              <li><a href="#location" className="bm-item-list">Daily New</a></li>
              <li><a href="#gallery" className="bm-item-list">Best Seller</a></li>
              <li><a href="#contact" className="bm-item-list">Sale</a></li>
              <li><a href="#contact" className="bm-item-list">Look Book</a></li>
            </ul>
        </div> */}
      </div>
    );
  }
};

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

