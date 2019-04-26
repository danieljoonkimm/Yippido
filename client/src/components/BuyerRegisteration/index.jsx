import React from 'react';

import './buyerRegisteration.scss';

import PersonalInformation from './PersonalInformation';
import Address from './Address';
import BusinessInformation from './BusinessInformation';
import Verification from './Verification';

const BuyerRegisteration = () => (
  <div>
    <div className="buyerRegistration_container">
      <div className="buyerRegistration_header">
        <h1>Buyer Registration</h1>
        <div className="languageBtn_container">
          <button>English</button>
          <button>Spanish</button>
        </div>
        <p>Join the premier online shopping mall for wholesale fashion and lifestyle brands</p>
        <p>A community of 900+ wholesale vendors & nearly half a million buyers.</p>
      </div>
    </div>
    <PersonalInformation />
    <Address />
    <BusinessInformation />
    <Verification />
  </div>
);
export default BuyerRegisteration;