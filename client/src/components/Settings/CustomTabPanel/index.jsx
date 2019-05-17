import React, { Component } from 'react';
import { TabPanel } from 'react-tabs';

import AccountSettings from '../AccountSettings';

class CustomTabPanel extends Component {
  constructor(props) {
    super(props);

    this.getTabPanel = this.getTabPanel.bind(this);
  }
  

  getTabPanel (name) {

    switch (name) {
      case 'Account Settings':
        return ( <AccountSettings/> );
        break;
        default: 
         break;
      }
  }
  

  render() {
    const { name } = this.props;

    return (
      <TabPanel>
        { this.getTabPanel(name) }
        hey
      </TabPanel>
    );
  }
}

CustomTabPanel.tabRole = 'TabPanel';

export default CustomTabPanel;