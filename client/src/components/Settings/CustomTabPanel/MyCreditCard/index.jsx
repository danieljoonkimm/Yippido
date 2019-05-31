import React, { Component } from 'react';

import './myCreditCard.scss';

class MyCreditCard extends Component {
  constructor(props) {
    super(props);

    this.fakeCC = {
      nameOnCard: 'Hans Kim',
      address: '20657 Golden Springs Dr unit 206',
      city: 'Diamond Bar',
      state: 'CA',
      zip: '91765',
      country: 'United States',
    };

    this.state = {
      currentlyAddingNewCard: false,
      cardNumber: '',
      nameOnCard: '',
      expDate: '',
      securityCode: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      setToDefaultPayment: '',
      location: '',
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
    
    if ( this.state.location.length === '') {
      this.setState({ location: name });
    } else {
      let checkboxes = document.getElementsByClassName('cc__billing__checkboxes');

      for( let i = 0; i < checkboxes.length; i++ ) {
        if ( checkboxes[i] !== target ) {
          checkboxes[i].checked = false;
        } 
      }

      this.setState({ location: name });
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
  
  generateMock () {
    let mock = [];
    
    for (let i = 0; i < 3; i++ ) {
      mock.push( 
        <div className="my__cc__added__card col-xs-5 col-sm-5 col-md-5">
          <h3>{this.fakeCC.nameOnCard}</h3>
          <div className="added__card__address">
            <div>{this.fakeCC.address }</div>
            <div>{`${this.fakeCC.city}, ${this.fakeCC.state} ${this.fakeCC.zip}`}</div>
            <div>{this.fakeCC.country }</div>                
          </div>
          <div className="added__card__btns">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )
    }
    
    mock.push(
      <div className="my__cc__added__card col-xs-5 col-sm-5 col-md-5">
        <div className="add__new__card">
          <button value="currentlyAddingNewCard" onClick={ this.state.currentlyAddingNewCard ? null : this._onClick}>Add New Card</button>
        </div>  
      </div>
    )
    return mock;
  }
  
  
  render() {
    const { name } = this.props;
    const { currentlyAddingNewCard } = this.state;
    
    return (
      <div id="my__cc">
        <h2 className="my__cc__title">{name}</h2>
        <div className="my__cc__content">
          <h4>My Credit Cards</h4>
          <div className="my__cc__added__cards">
            <div className="row">
                { this.generateMock() }
            </div>
          </div>
          {
            currentlyAddingNewCard ? (
              <div>
                <div className="adding__new__card__info">
                  <h4>Credit Card Infomation</h4>
                  <div className="row">
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>Card Number</div>
                      <input
                        type="text"
                        name="cardNumber"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>Name on the Card</div>
                      <input
                        type="text"
                        name="nameOnCard"
                        onChange={this._onChange}
                      />
                    </div>    
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>Expiration Date</div>
                      <input
                        type="text"
                        name="expDate"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>Security Code</div>
                      <input
                        type="text"
                        name="securityCode"
                        onChange={this._onChange}
                      />
                    </div>    
                    <div className="adding__card__details col-xs-6 col-sm-6 col-md-6">
                      <input
                        style={{ width: '25px'}}
                        type="checkBox"
                        name="setToDefaultPayment"
                        onChange={this._onChange}
                      />
                      <span>Set this card as my default payment card</span>
                    </div>
                  </div>
                </div>
                <div className="adding__new__card__info">
                  <h4>Billing Infomation</h4>
                  <div className="row">
                    <div style={{ padding: '10px'}}>Location</div>
                    <div className="adding__card__details col-xs-3 col-sm-3 col-md-3">
                      <input
                        type="checkbox"
                        name="United States"
                        className="cc__billing__checkboxes"
                        onChange={this._onOnlyOneChange}
                      /> 
                      <span>United States</span>
                    </div>
                    <div className="adding__card__details col-xs-3 col-sm-3 col-md-3">
                      <input
                        type="checkbox"
                        name="Canada"
                        className="cc__billing__checkboxes"
                        onChange={this._onOnlyOneChange}
                      />  
                      <span>Canada</span>
                    </div>
                    <div className="adding__card__details col-xs-3 col-sm-3 col-md-3">
                      <input
                        name="International"
                        type="checkbox"
                        className="cc__billing__checkboxes"
                        onChange={this._onOnlyOneChange}
                      />  
                      <span>International</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="row">
                        <div className="cc__dropdown col-xs-5 col-sm-5 col-md-5">
                          <div>Bill To</div>
                          <input
                            type="text"
                            name="address"
                            onChange={this._onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>Address</div>
                      <input
                        type="text"
                        name="address"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>City</div>
                      <input
                        type="text"
                        name="city"
                        onChange={this._onChange}
                      />
                    </div>    
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
                      <div>State / Province</div>
                      <input
                        type="text"
                        name="state"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="adding__card__details col-xs-5 col-sm-5 col-md-5">
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
                   
                  </div>
                <div className="save__cc__info__btns row">
                  <div className="col-xs-4 col-sm-4 col-md-4">
                    <button className="change__btn" onClick={this._storeCreditCardInfo}>Save Card</button>
                    <button value="currentlyAddingNewCard" onClick={this._onClick}>Cancel</button>
                  </div>
                </div>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
      
    );
  }
}

export default MyCreditCard;