import React, { Component } from 'react';
import { TabPanel } from 'react-tabs';

import AccountSettings from './AccountSettings';
import MyInfomation from './MyInfomation';
import MyCreditCard from './MyCreditCard';
import ShippingAddress from './ShippingAddress';

import MyMessages from './MyMessages';

class CustomTabPanel extends Component {
  constructor(props) {
    super(props);

    this.getTabPanel = this.getTabPanel.bind(this);
  }
  

  getTabPanel (name) {
    switch (name) {
      case 'Account Settings':
        return ( <AccountSettings name={name}/> );
      case 'My Credit Card':
        return ( <MyCreditCard name={name}/> );
      case 'Shipping Address':
        return ( <ShippingAddress name={name}/> );
      case 'My Infomation':
        return ( <MyInfomation name={name}/> );

      case 'Inbox':
        return ( <MyMessages name={name}/> );
      case 'Outbox':
        return ( <MyMessages name={name}/> );
      default:
        return ( <div>{name}</div>)
    }
  }
  

  render() {
    const { name } = this.props;

    return (
      <div>{ this.getTabPanel(name) }</div>
      
    );
  }
}



export default CustomTabPanel;