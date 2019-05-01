import React, { Component } from 'react';
 
import Demo from './Demo/index';
import Product from './Product/index';
import CustomerViewed from './CustomerViewed/index'

class Vendor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row" style={{ padding: '40px 0 20px 0'}}>
            <div className="col-xs-8 col-sm-8 col-md-8">
              <Demo/>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <Product/>
            </div>
          </div>    
        </div>
        <div style={{ backgroundColor: "#efefef", paddingBottom: '40px' }}>
          <div className="container">
            <CustomerViewed/>   
          </div>
        </div>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">New message</h4>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="control-label">Recipient:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="control-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vendor;