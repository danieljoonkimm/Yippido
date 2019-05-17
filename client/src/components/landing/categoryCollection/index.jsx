import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./categoryCollection.scss";
import ProductImage from "../../Vendor/ProductImage";

class CategoryCollection extends Component {
  constructor() {
    super();

    this.categoryCollectionBig = [
      [{ url: "https://dummyimage.com/400x600/e3d187/#fff" }],
      [{ url: "https://dummyimage.com/400x600/26628a/#fff" }],
      [{ url: "https://dummyimage.com/400x600/929ded/#fff" }],
      [{ url: "https://dummyimage.com/400x600/ed3462/#fff" }]
    ];

    this.categoryCollectionSmall = [
      [
        { url: "https://dummyimage.com/400x600/e3d187/#fff" },
        { url: "https://dummyimage.com/400x600/a4e099/#fff" }
      ],
      [
        { url: "https://dummyimage.com/400x600/26628a/#fff" },
        { url: "https://dummyimage.com/400x600/9b192e/#fff" }
      ],
      [
        { url: "https://dummyimage.com/400x600/929ded/#fff" },
        { url: "https://dummyimage.com/400x600/bbdbf3/#fff" }
      ]
    ];

    this.state = {
      categories: [
        {
          category_id: 74,
          parent_id: 0,
          name: "women",
          categories: []
        },
        {
          category_id: 74,
          parent_id: 0,
          name: "shoes",
          categories: []
        }
      ],
      eachCategory: []
    };
  }

  componentWillMount() {
    //api call
    //this.setState to categories = response.data
    //use logic below to map
    //will render
    //need to see how the componentWillUpdate for categories within the category
    {
      this.state.categories.map(categories => {
        let categoryName = categories;
        this.state.eachCategory.push(categoryName.name);
      });
    }
  }

  convertGrid(images) {
    const item = {
      name: "Aisley Rose",
      price: 18,
      model: "L4777R",
      image: "https://dummyimage.com/400x600/26628a/fff"
    };

    return images.map(image => {
      if (image.length === 1) {
        return (
          <div
            className="col-xs-3 col-sm-3 col-md-3"
            style={{ padding: "5px" }}
          >
            <ProductImage
              className="col-xs-12 col-sm-12 col-md-12"
              name={"default"}
              images={image}
              isViewable={false}
            />
            <div>
              <div>
                {item.model} / <strong>${item.price}</strong>
              </div>
              <div>{item.name}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className="col-xs-4 col-sm-4 col-md-4"
            style={{ padding: "5px" }}
          >
            <ProductImage
              className="col-xs-6 col-sm-6 col-md-6"
              name={"duo"}
              images={image}
              isViewable={false}
            />
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div>
                {item.model} / <strong>${item.price}</strong>
              </div>
              <div>{item.name}</div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div>
                {item.model} / <strong>${item.price}</strong>
              </div>
              <div>{item.name}</div>
            </div>
          </div>
        );
      }
    });
  }
  render() {
    return (
      <div id="newArrivals">
        <div className="container">
          <h1>CATEGORY COLLECTION</h1>
          <div className="row">
            <div
              className="col-xs-2 col-sm-2 col-sm-2"
              id="categoryCollection_categories"
            >
              <div className="col-xs-12 col-sm-12 col-md-12">
                {this.state.eachCategory.map(category => {
                  let mappedCatergory = (
                    <li key={category.toString()}>
                      {<button>{category}</button>}
                    </li>
                  );
                  return <ul>{mappedCatergory}</ul>;
                })}
              </div>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10">
              <div className="row" style={{ margin: 0 }}>
                {this.convertGrid(this.categoryCollectionBig)}
              </div>
              <div className="row" style={{ margin: 0 }}>
                {this.convertGrid(this.categoryCollectionSmall)}
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div className="container" id="categoryCollection_container">
      //   <h1 className="categoryCollection_header">CATEGORY COLLECTION</h1>
      //   <div className="row" id="categoryCollection_row">
      //     <div className="col-xs-2 col-sm-2 col-sm-2" id="categoryCollection_categories">
      //       <div className="col-xs-12 col-sm-12 col-md-12">
      //         {this.state.eachCategory.map( (category) => {
      //           let mappedCatergory = <li key={category.toString()}>{<button>{category}</button>}</li>;
      //           return (<ul>{mappedCatergory}</ul>);
      //         })}
      //       </div>
      //     </div>

      //     <div className="col-xs-10 col-sm-10 col-md-10">
      //       <div className="row" id="categoryCollection_topRow">
      //         <div className="col-xs-3 col-sm-3 col-sm-3 categoryCollection_imageContainer">
      //           <div className="col-xs-12 col-sm-12 col-md-12 categoryCollection_image">
      //             <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>
      //         </div>

      //         <div className="col-xs-3 col-sm-3 col-sm-3 categoryCollection_imageContainer">
      //           <div className="col-xs-12 col-sm-12 col-md-12 categoryCollection_image">
      //             <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>
      //         </div>

      //         <div className="col-xs-3 col-sm-3 col-sm-3 categoryCollection_imageContainer">
      //           <div className="col-xs-12 col-sm-12 col-md-12 categoryCollection_image">
      //             <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>
      //         </div>

      //         <div className="col-xs-3 col-sm-3 col-sm-3 categoryCollection_imageContainer">
      //           <div className="col-xs-12 col-sm-12 col-md-12 categoryCollection_image">
      //             <img className="img-responsive" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>
      //         </div>
      //       </div>

      //       <div className="row" id="categoryCollection_bottomRow">
      //         <div className="col-xs-4 col-sm-4 col-md-4">
      //           <div className="col-xs-6 col-sm-6 col-md-6 categoryCollection_subImage categoryCollection_image1">
      //             <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff"/>
      //           </div>

      //           <div className="col-xs-6 col-sm-6 col-md-6 categoryCollection_subImage categoryCollection_image2">
      //             <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>
      //         </div>

      //         <div className="col-xs-4 col-sm-4 col-md-4">
      //           <div className="col-xs-6 col-sm-6 col-md-6 categoryCollection_subImage categoryCollection_image1">
      //             <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>

      //           <div className="col-xs-6 col-sm-6 col-md-6 categoryCollection_subImage categoryCollection_image2">
      //             <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>
      //         </div>

      //         <div className="col-xs-4 col-sm-4 col-md-4">
      //           <div className="col-xs-6 col-sm-6 col-md-6 categoryCollection_subImage categoryCollection_image1">
      //             <img className="img-responsive img-responsive-left" alt="" src="https://dummyimage.com/400x600/26628a/fff" />
      //           </div>

      //           <div className="col-xs-6 col-sm-6 col-md-6 categoryCollection_subImage categoryCollection_image2">
      //             <img className="img-responsive img-responsive-right" alt="" src="https://dummyimage.com/400x600/26628a/fff"/>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default CategoryCollection;
