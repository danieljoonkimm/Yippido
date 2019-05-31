import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CustomTabPanel from './CustomTabPanel';

import './settings.scss';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = { tabIndex: 8 };

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
      messages: {
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
    this._onTabSwitch = this._onTabSwitch.bind(this);
  }

  _onTabSwitch (tabIndex, lastIndex, e) {
    const index = e.target.attributes.getNamedItem('tabindex'); 

    this.setState({
      tabIndex: index !== null ? Number(index.value) : tabIndex
    })
  }

  _onCollapse (e, tab) {
    const collapsible = this[`${tab}__collapsible`];
    const parent = document.getElementById(tab);
    let wrapper = this[`${tab}__wrapper`];

    collapsible.style.height === '' ?  collapsible.style.height = `${wrapper.clientHeight}px` : null;


    collapsible.style.height = collapsible.clientHeight ?  0 : `${wrapper.clientHeight}px`;
    parent.classList.contains('open') ? parent.classList.remove('open') : parent.classList.add('open');
  }

  _configureTabs () {
    let counter = -1;
    
    return Object.keys(this.tabs).map( mainTab => {
      const { name, options } = this.tabs[mainTab];

      const subTabs = options.map( subTabs => {
        const { name, disabled } = subTabs;
        counter++;
  
        return ( 
          <Tab tabIndex={`${counter}`} className="settings__subTab" disabled={disabled}>{name}</Tab>
        );
      });
        
      return ( 
        <div id={mainTab} className="settings__mainTab open">
          <div onClick={(e) => { this._onCollapse(e, mainTab)}} className="mainTab__name"> 
            <h4>{name}</h4>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="grow"  ref={ node => { this[`${mainTab}__collapsible`] = node; }} >
            <div ref={ node => { this[`${mainTab}__wrapper`] = node; }} >{ subTabs }</div>
          </div>
        </div>
      )
    });
  }

  _configureTabPanel () {
    return Object.keys(this.tabs).map( mainTab => {
      const { options } = this.tabs[mainTab];

      return options.map( tab => { 
      
        return ( 
          <TabPanel>
            <CustomTabPanel name={tab.name}/>
          </TabPanel>
        );
      });
    });

  }


  render() {
    return (
      <div id="settings">
        <div className="container">
          <Tabs 
            className="row" 
            selectedTabClassName="settings__activeTab" 
            selectedTabPanelClassName="settings__tabpanels" 
            selectedIndex={this.state.tabIndex} 
            onSelect={(tabIndex, lastIndex, e) => { this._onTabSwitch(tabIndex, lastIndex, e) }} 
          > 
              <div className="col-xs-3 col-sm-3 col-md-3" style={{ padding: '20px'}}>
                <TabList className="settings__tablist">
                  { this._configureTabs() } 
                </TabList>
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9" >
                { this._configureTabPanel() }
              </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Settings;