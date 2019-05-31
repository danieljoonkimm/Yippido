import React, { Component } from 'react';

import './accountSettings.scss';

class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      showUpdateUserID: false,
      showUpdatePassword: false,
    };

    this.user = { 
      id: 'kinginthenorth@gmail.com',
      password: 'aegon'
    }

    this._onClick = this._onClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this._updateUserInfomation = this._updateUserInfomation.bind(this);
  }

  _onClick (e) {
    if ( e.target.value === 'showUpdateUserID' ) {
      this.setState({
        [e.target.value]: !this.state[e.target.value],
        email: '',
      })
    } else {
      this.setState({
        [e.target.value]: !this.state[e.target.value],
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      })
    }
  }

  _onChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  _updateUserInfomation () {
    // logic fof updating user info
    console.log('clicked')
  }


  render() {
    const { name } = this.props;
    const { showUpdateUserID, showUpdatePassword } = this.state;
    
    return (
      <div id="account__settings">
        <h2 className="account__settings__title">{name}</h2>
        <div className="account__settings__content">
          <h4>Username / Password</h4>
          <div className="account__settings__username">
            <div className="account__settings__current__email row">
              <div className="col-xs-4 col-sm-4 col-md-4">Current Email (User ID)</div>
              <div className="col-xs-4 col-sm-4 col-md-4">{this.user.id}</div>
              { 
                !showUpdateUserID ? ( 
                  <div className="account__settings__edit__btn  col-xs-4 col-sm-4 col-md-4">
                    <button value="showUpdateUserID" onClick={this._onClick}>Edit</button> 
                  </div>
                ) : null 
              }
            </div>
            {
              showUpdateUserID ? (
                <div>
                  <div className="account__settings__new__username row">
                    <div className="new__username col-xs-4 col-sm-4 col-md-4">New Email (User ID)</div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                      <input
                        type="text"
                        name="email"
                        onChange={this._onChange}
                      />
                    </div>
                  </div>
                  <div className="new__fields__btns row">
                    <div className="col-xs-4 col-sm-4 col-md-4">
                      <button className="change__btn" onClick={this._updateUserInfomation}>Change</button>
                      <button value="showUpdateUserID" onClick={this._onClick}>Cancel</button>
                    </div>
                  </div>

                </div>
              ) : null
            }
          </div>
          
          <div className="account__settings__password">
            <div className="account__settings__current__password row">
              <div className="col-xs-4 col-sm-4 col-md-4">Password</div>
              <div className="col-xs-4 col-sm-4 col-md-4">*********</div>
              { 
                !showUpdatePassword ? ( 
                  <div className="account__settings__edit__btn col-xs-4 col-sm-4 col-md-4">
                    <button value="showUpdatePassword" onClick={this._onClick}>Edit</button> 
                  </div>
                ) : null 
              }
            </div>
            {
              showUpdatePassword ? (
                <div>
                  <div className="account__settings__edit__passwords row">
                    <div className="col-xs-4 col-sm-4 col-md-4">Current Password</div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                      <input
                          type="text"
                          name="currentPassword"
                          onChange={this._onChange}
                        />
                    </div>
                  </div>
                  <div className="account__settings__edit__passwords row">
                    <div className="col-xs-4 col-sm-4 col-md-4">New Password</div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                      <input
                          type="text"
                          name="newPassword"
                          onChange={this._onChange}
                        />
                    </div>
                  </div>
                  <div className="account__settings__edit__passwords row">
                    <div className="col-xs-4 col-sm-4 col-md-4">Confirm New Password</div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                      <input
                        type="text"
                        name="confirmNewPassword"
                        onChange={this._onChange}
                      />
                    </div>
                  </div>
                  <div className="new__fields__btns row">
                    <div className="col-xs-4 col-sm-4 col-md-4">
                      <button className="change__btn" onClick={this._updateUserInfomation}>Change</button>
                      <button value="showUpdatePassword" onClick={this._onClick}>Cancel</button>
                    </div>
                  </div>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSettings;