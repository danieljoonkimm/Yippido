import React, { Component } from 'react';
import './tabCategory.scss';

// components
import NavCategory from '../../Navigation/NavCategory';
import Checkbox from '../Checkboxes';
 
// let label;

export default class NavCat extends Component {
  constructor() {
    super();

    // this.state = { checked: false }
    this.state = {
      checkboxes: []
    }
  }
  // reduceCheckbox(labels) {
  //   let check = labels.reduce(
  //     (options, option) => ({
  //       ...options,
  //       [option]: false
  //     }),
  //     {}
  //   )
  //   // console.log(check);
  //   this.setState({checkboxes: check})
  // }
  // handleCheckboxChange(changeEvent) {
  //   const { name } = changeEvent.target;
  
  //   this.setState(prevState => ({
  //     checkboxes: {
  //       ...prevState.checkboxes,
  //       [name]: !prevState.checkboxes[name]
  //     }
  //   }));
  // };
  formatCheckbox(header, labels) {
    // console.log(this.reduceCheckbox(labels))
    
    return (
      <div>
        <h1 className="toggle_header">{header}</h1>
        {
          labels.map(label => {
            {/* console.log(this.state.checkboxes[label]) */}
            return (
              <div className="toggle_checkboxes">
                <label htmlFor="">
                  <input type="checkbox" checked={this.state.checkboxes[label]} onClick={this.handleCheckboxChange}/>
                  <span> {label}</span>
                </label>
              </div>
            )
          })
        }
      </div>
    )
  }

  // formatCheckbox(header, labels) {
  //   return (
  //     <div>
  //       <h1 className="toggle_header">{header}</h1>
  //       {
  //         labels.map(label => {
  //           console.log(this.state.checkboxes[label])
  //           return (
  //             <div className="toggle_checkboxes">
  //               <label htmlFor="">
  //                 <input type="checkbox" checked={this.state.checkboxes[label]} onClick={this.handleCheckboxChange}/>
  //                 <span> {label}</span>
  //               </label>
  //             </div>
  //           )
  //         })
  //       }
  //     </div>
  //   )
  // }
  render() {
    return(
      <div className="tabCategory">
        <div>
          <NavCategory />
        </div>
        <div className="tabToggles">
          {this.formatCheckbox('style', ['active', 'fashion', 'streetwear', 'casual', 'formal'])}
          {this.formatCheckbox('Size', ['One Size', 'S', 'L', '2xl', '4xl'])}
          <div>
            <h1 className="toggle_header">Search</h1>
          </div>
          {this.formatCheckbox('Clothing Length', ['Short', 'Regular', 'Long', 'X-long'])}
          {this.formatCheckbox('Body Type', ['Junior', 'Young Contemporary', 'Missy', 'Plus Size', 'Maternity'])}
          <div>
            <h1 className="toggle_header">Color</h1>
          </div>
        </div>
      </div>
    )
  }
};
// {this.createCheckbox('young')}
{/* <Checkboxes label={['One Size', 'S', 'L', '2xl', '4xl']}

/> */}

  // handleLabels(labels) {
  //   // for (let i = 0; i < labels.length; i++) {
  //     this.setState({ checkboxes: labels })
  //     // console.log(labels[i]);
  //   // }
  // }
  // handleCheckboxChange(changeEvent) {
  //   const label = changeEvent.target;

  //   this.setState(prevState => ({
  //     checkboxes: {
  //       ...prevState.checkboxes,
  //       [label]: !prevState.checkboxes[label]
  //     }
  //   }))
  // }
 
  // handleCheckbox(event) {
  //   this.setState({ checked: event.target.checked })

  // }
  // createCheckbox(option) {
  //   <Checkboxes 
  //     label={option}
  //     isSelected={this.state.checkboxes[option]}
  //     onCheckboxChange={this.handleCheckboxChange}
  //     key={option}
  //     />
  // }