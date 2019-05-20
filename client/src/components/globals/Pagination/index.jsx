import React, { Component } from "react";
import Pagination from "react-js-pagination";
import "./pagination.scss";

class PaginationLogic extends Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this)

    this.state = {
      activePage: 1
      
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  constructPagination() {
    let dataRows = 6, dataColumns = 4
    return (
      <Pagination
        activePage={this.state.activePage}
        pageRangeDisplayed={9}
        onChange={this.handlePageChange}
        itemsCountPerPage={dataRows*dataColumns}
        totalItemsCount={this.props.numberOfItems}
      />
    );
  }

  render() {
    return <div className="col-xs-4 col-sm-4 col-md-4">{this.constructPagination()}</div>;
  }
}

export default PaginationLogic;
