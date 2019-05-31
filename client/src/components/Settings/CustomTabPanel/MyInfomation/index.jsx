import React, { Component } from 'react';

import './myInfomation.scss';

class MyInfomation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyAddingNewCard: true,
      firstName: '',
      lastName: '',
      doesCompanySellOnline: '',
      email: '',
      address: '',
      location: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phoneNumber: '',
      fax: '',
      permitNumber: '',
    }
  
    this._onClick = this._onClick.bind(this);
    this._onOnlyOneChange = this._onOnlyOneChange.bind(this);
    this._onChange = this._onChange.bind(this);
    this._storeCreditCardInfo = this._storeCreditCardInfo.bind(this);
  }

  _onClick (e) {
    this.setState({
      [e.target.value]: !this.state[e.target.value],
    })
  }

  _onOnlyOneChange (e) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const className = value === 'location' ? 'my__company__checkboxes' : 'my__info__checkboxes';
    
    if ( this.state[value].length === '') {
      this.setState({ [value]: name });
    } else {
      let checkboxes = document.getElementsByClassName(className);
    
      for( let i = 0; i < checkboxes.length; i++ ) {
        if ( checkboxes[i] !== target ) {
          checkboxes[i].checked = false;
        } 
      }

      this.setState({ [value]: name });
    }
  }
  
  _onChange (e) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  _storeCreditCardInfo () {
    // logic for saving to db;
    console.log('clicked')
  }
  

  render() {
    const { name } = this.props;
    const { currentlyAddingNewCard } = this.state;
    
    console.log(this.state)

    return (
      <div id="my__info">
        <h2 className="my__info__title">{name}</h2>
        <div className="my__info__content">
          <h4>Company Infomation: Verified Buyer</h4>
          <div className="adding__new__info">
            <div className="row">
              <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                <div>First Name</div>
                <input
                  type="text"
                  name="firstName"
                  onChange={this._onChange}
                />
              </div>
              <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
              <div>Last Name</div>
              <input
                type="text"
                name="lastName"
                onChange={this._onChange}
              />
            </div>
            <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
              <div>Company Name</div>
              <input
                type="text"
                name="companyName"
                onChange={this._onChange}
              />
            </div>
            <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
              <div>Email</div>
              <input
                type="text"
                name="email"
                onChange={this._onChange}
              />
            </div>
            <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
              <div>Seller Permit Number</div>
              <input
                type="text"
                name="permitNumber"
                onChange={this._onChange}
              />
            </div>
          </div>
          <div className="row">
            <div style={{ padding: '10px'}}>Do you sell online?</div>
              <div className="adding__info__details col-xs-2 col-sm-2 col-md-2">
                <input
                  type="checkbox"
                  name="yes"
                  value="doesCompanySellOnline"
                  className="my__info__checkboxes"
                  onChange={this._onOnlyOneChange}
                /> 
                <span>Yes</span>
              </div>
              <div className="adding__info__details col-xs-2 col-sm-2 col-md-2">
                <input
                  type="checkbox"
                  name="no"
                  value="doesCompanySellOnline"
                  className="my__info__checkboxes"
                  onChange={this._onOnlyOneChange}
                /> 
                <span>No</span>
              </div>
            </div>
            <div className="save__cc__info__btns row">
              <div className="col-xs-4 col-sm-4 col-md-4">
                <button className="change__btn" onClick={this._storeCreditCardInfo}>Save Address</button>
                <button value="currentlyAddingNewCard" onClick={this._onClick}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div  className="my__info__content" style={{ margin: '20px 0'}}>
        <h4>Document of Proof</h4>
        </div>
    
        {
          currentlyAddingNewCard ? (
              <div className="my__info__content" style={{ margin: '20px 0'}}>
                <h4>Company Address</h4>
                <div className="adding__new__info">
                  <div className="row">
                    <div style={{ padding: '10px'}}>Location</div>
                    <div className="adding__info__details col-xs-3 col-sm-3 col-md-3">
                      <input
                        type="checkbox"
                        name="United States"
                        value="location"
                        className="my__company__checkboxes"
                        onChange={this._onOnlyOneChange}
                      /> 
                      <span>United States</span>
                    </div>
                    <div className="adding__info__details col-xs-3 col-sm-3 col-md-3">
                      <input
                        type="checkbox"
                        name="Canada"
                        value="location"
                        className="my__company__checkboxes"
                        onChange={this._onOnlyOneChange}
                      />  
                      <span>Canada</span>
                    </div>
                    <div className="adding__info__details col-xs-3 col-sm-3 col-md-3">
                      <input
                        name="International"
                        type="checkbox"
                        value="location"
                        className="my__company__checkboxes"
                        onChange={this._onOnlyOneChange}
                      />  
                      <span>International</span>
                    </div>
                    <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                      <div>Address</div>
                      <input
                        type="text"
                        name="address"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                      <div>City</div>
                      <input
                        type="text"
                        name="city"
                        onChange={this._onChange}
                      />
                    </div>    
                    <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                      <div>State / Province</div>
                      <input
                        type="text"
                        name="state"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                      <div>Zip / Postal Code</div>
                      <input
                        type="text"
                        name="zip"
                        onChange={this._onChange}
                      />
                    </div>    
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="row">
                        <div className="cc__dropdown col-xs-5 col-sm-5 col-md-5">
                          <div>Country</div>
                          <input
                            type="text"
                            name="address"
                            onChange={this._onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                      <div>Phone Number</div>
                      <input
                        type="text"
                        name="phoneNumber"
                        onChange={this._onChange}
                      />
                    </div> 
                    <div className="adding__info__details col-xs-5 col-sm-5 col-md-5">
                      <div>fac</div>
                      <input
                        type="text"
                        name="fax"
                        onChange={this._onChange}
                      />
                    </div> 
                  </div>
                <div className="save__cc__info__btns row">
                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <button className="change__btn" onClick={this._storeCreditCardInfo}>Save Address</button>
                    <button value="currentlyAddingNewCard" onClick={this._onClick}>Cancel</button>
                  </div>
                </div>
                </div>
              </div>
            ) : null
          }
      </div>
    );
  }
}

export default MyInfomation;