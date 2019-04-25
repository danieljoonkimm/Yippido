import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./categoryCollection.scss";

class CategoryCollection extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          women: {
            women1:
              "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80",
            women2:
              "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80",
            women3:
              "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=80"
          }
        },
        {
          shoes: {
            booties: "shoes",
            boots: "test",
            dress_shoes: "test1"
          }
        }
      ],
      eachCategory: [],
    };
  }

  componentDidMount() {
    {
      this.state.categories.map(categories => {
        let cat = categories;
        for (var key in cat) {
          this.state.eachCategory.push(key);
        }
      });
    }
  }

  render() {
    console.log(this.state.eachCategory)
    return (
      <div className="container" id="categoryCollection_container">
        <h1>CATEGORY COLLECTION</h1>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-sm-2">
            <div className="col-xs-12 col-sm-12 col-md-12">
            {this.state.eachCategory.map((list) => {
              return <li>{list}</li>
            })}
            </div>
          </div>

          <div className="col-xs-10 col-sm-10 col-md-10">
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-3 col-sm-3 col-sm-3">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6">
                  <img className="img-responsive" alt="" src={dummyImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCollection;
