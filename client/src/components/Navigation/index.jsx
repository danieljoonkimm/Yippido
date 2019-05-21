import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";
import ReactTooltip from 'react-tooltip';
import Popup from "reactjs-popup";
import {withRouter} from "react-router-dom";


// Components
import NavCategory from './NavCategory';
import NavVendor from './NavVendor';
import NavDailyNew from './NavDailyNew';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.listenScrollEvent = this.listenScrollEvent.bind(this);

    this.state = {lettersFinal: [],
      position: {
        position: "relative",
        top: null
      }
    }
  }

  
  listenScrollEvent(e) {
    if (window.scrollY > 70) {
      this.setState({position: {position: "fixed", top: 0}
    })
    } else {
      this.setState({position: {position: 'relative', top: null}})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render () {
    return (
      <div>
        <div id="navbar-desktop" style={this.state.position}>
          <ul className="navbar-item">
            <Popup trigger={<li className="bm-item-list">Categories<Icon icon={ic_arrow_drop_down}/></li>} position="bottom center" className="navbar_tooltip">
              {/* <NavCat /> */}
              <NavCategory />
            </Popup>
            {/* <li className="bm-item-list" data-tip data-for='navCat' data-event='click focus'>Categories<Icon icon={ic_arrow_drop_down}/></li>
              <ReactTooltip id='navCat' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
               effect="solid" border={true} className="navbar_tooltip"
              clickable={true} scrollHide={false}>
              </ReactTooltip> */}
            <Popup trigger={<li className="bm-item-list">Vendors<Icon icon={ic_arrow_drop_down}/></li>} position="bottom center" className="navbar_tooltip">
              <NavVendor />
            </Popup>
            {/* <li className="bm-item-list" data-tip data-for="navVendor" data-event="click focus">
              Vendors <Icon icon={ic_arrow_drop_down}/>
              <ReactTooltip id='navVendor' place="bottom" globalEventOff='click' type="light" aria-haspopup='true' 
               effect="solid" border={true} className="navbar_tooltip"
              clickable={true} scrollHide={false}>
                <NavVendor />
              </ReactTooltip>
            </li> */}
         <Popup trigger={<li className="bm-item-list">Daily New<Icon icon={ic_arrow_drop_down}/></li>} position="bottom center" className="navbar_tooltip">
              <NavDailyNew />
            </Popup>
            <li onClick={() => {this.props.history.push("/bestSeller")}} className="bm-item-list">Best Seller</li>
            <li onClick={() => {this.props.history.push("/sale")}} className="bm-item-list">Sale</li>
            <li className="bm-item-list">Look Book</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default withRouter(Navigation);