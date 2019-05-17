import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CustomTabPanel from './CustomTabPanel';

import './settings.scss';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      my_account: true,
      my_orders: true,
      message: true,
      rating: true,
      statistics: true,
      vendors: true,
    }

    this.tabs = { 
      my_account: {
        name: 'My Account',
        options: [ 
          { name: 'Account Settings', disabled: false },
          { name: 'My Infomation', disabled: false },
          { name: 'My Credit Card', disabled: false },
          { name: 'Shipping Address', disabled: false },
        ]
      },
      my_orders: {
        name: 'My Orders',
        options: [ 
          { name: 'Order History', disabled: false },
          { name: 'Purchased Items', disabled: false },
          { name: 'Consolidation Order History', disabled: false },
          { name: 'Store Credit', disabled: false },
        ]
      },
      message: {
        name: 'Message',
        options: [ 
          { name: 'Inbox', disabled: false },
          { name: 'Outbox', disabled: false },
        ]
      },
      rating: {
        name: 'Rating',
        options: [ 
          { name: 'My Rating', disabled: false },
          { name: 'Leave Feedback', disabled: false },
          { name: 'Feedback Left', disabled: false },
        ]
      },
      statistics: {
        name: 'Statistics',
        options: [ 
          { name: 'Order Statistics', disabled: false },
        ]
      },
      vendors: {
        name: 'Vendors',
        options: [ 
          { name: 'View All Vendors', disabled: false },
        ]
      }
    }
    
    this._onCollapse = this._onCollapse.bind(this);
  }

  _onCollapse (e) {
    const name = e.target.attributes.getNamedItem('name').value;
    const collapsible = document.getElementById(`${name}__collapsible`);
    let wrapper = document.querySelector(`.${name}__wrapper`);

    collapsible.style.height = collapsible.clientHeight ?  0 : wrapper.clientHeight + "px";
  }

  _configureTabs () {
    return Object.keys(this.tabs).map( mainTab => {
      const { name, options } = this.tabs[mainTab];

      const subTabs = options.map( subTabs => {
        const { name, disabled } = subTabs;

        return ( 
          <Tab className="settings__subTab" disabled={disabled}>{name}</Tab>
        );
      });

      return ( 
        <div className="settings__mainTab">
          <h4 name={mainTab} onClick={this._onCollapse}>{name}</h4>
          <div id={`${mainTab}__collapsible`} className="grow">
            <div className={`fuckfuck ${mainTab}__wrapper`}>{ subTabs }</div>
          </div>
        </div>
      )
    });
  }

  _configureTabPanel () {
    return Object.keys(this.tabs).map( mainTab => {
      const { options } = this.tabs[mainTab];
      console.log(mainTab)

      const tabPanels = options.map( tab => { 
        return ( <CustomTabPanel name={tab.name}/> )
      });


      return tabPanels;
    });
  }


  render() {
    return (
      <div id="settings">
        <div className="container">
          <Tabs className="row" selectedTabClassName="settings__activeTab"> 
              <div className="col-xs-3 col-sm-3 col-md-3">
                <TabList className="settings__tablist">
                  { this._configureTabs() } 
                </TabList>
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9">
                { this._configureTabPanel() }
              </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Settings;