import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";
import ReactTooltip from 'react-tooltip';

// Components
import NavCategory from './NavCategory';
import NavVendor from './NavVendor';
import NavDailyNew from './NavDailyNew';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down';






export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {lettersFinal: []}
  }  


  render () {
    return (
      <div>
        <div id="navbar-desktop">
          <ul className="navbar-item">
            <li className="bm-item-list" data-tip data-for='navCat' data-event='click focus'>Categories<Icon icon={ic_arrow_drop_down}/></li>
              <ReactTooltip id='navCat' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
              role='example' effect="solid" border={true} className="navbar_tooltip"
              clickable={true} scrollHide={false}>
                <NavCategory />
              </ReactTooltip>
            <li className="bm-item-list" data-tip data-for="navVendor" data-event="click focus">
              Vendors <Icon icon={ic_arrow_drop_down}/>
              <ReactTooltip id='navVendor' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
              role='example' effect="solid" border={true} className="navbar_tooltip"
              clickable={true} scrollHide={false}>
                <NavVendor />
              </ReactTooltip>
            </li>
            <li className="bm-item-list" data-tip data-for="navDailyNew" data-event="click focus">
              Daily New <Icon icon={ic_arrow_drop_down}/>
              <ReactTooltip id='navDailyNew' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
              role='example' effect="solid" border={true} className="navbar_tooltip"
              clickable={true} scrollHide={false}>
                <NavDailyNew />
              </ReactTooltip>
            </li>            <li className="bm-item-list">Best Seller</li>
            <li className="bm-item-list">Sale</li>
            <li className="bm-item-list">Look Book</li>
          </ul>
        </div>
      </div>
    );
  }
};
