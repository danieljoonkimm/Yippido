import React from 'react';
import './businessInformation.scss';

const BusinessInformation = () => (
  <div className="businessInformation_container">
    <div className="buyerRegistration_subtitle">
      <h1>Business Information</h1>
      <p>Tell us about your company</p>
    </div>
    <form action="">
      <div className="row buyerRegistration_inputField checkbox">
        <div className="row buyerRegistration_questions">Where do you sell your products?</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Offline Store</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Online Store</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Online and Offline Store</p></span>
      </div>
      <div className="row buyerRegistration_inputField checkbox">
        <div className="row buyerRegistration_questions">What kind of store do you own?</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Boutique</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Speciality Boutique</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Department Store</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Chain Store</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Discount Outlet</p></span>
        {/* <span className="col-xs-4"><input type="checkbox"/><p>Department Store</p></span> */}
      </div>
      <div className="row buyerRegistration_inputField checkbox dotted">
        <div className="row buyerRegistration_questions">What is your primary market?</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Women</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Men</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Kids</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Shoes</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Handbags</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Accessories</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Beauty</p></span>
      </div>
      <div className="row buyerRegistration_inputField checkbox dotted">
        <div className="row buyerRegistration_questions">Size</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Plus Size</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Petite</p></span>
      </div>
      <div className="row buyerRegistration_inputField checkbox dotted">
        <div className="row buyerRegistration_questions">Specialty</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Lingerie</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Swimwear</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Uniforms</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Maternity</p></span>

      </div>
      <div className="row buyerRegistration_inputField checkbox dotted">
        <div className="row buyerRegistration_questions">Style</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Casual</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Formal</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Contemporary</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Junior</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Missy</p></span>
      </div>
      <div className="row buyerRegistration_inputField checkbox">
        <div className="row buyerRegistration_questions">Occasional</div>
        <span className="col-xs-4"><input type="checkbox"/><p>Vacation</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Evening & Cocktail</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Outdoor & Active</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Night Out</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Wedding</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Prom & Homecoming</p></span>
        <span className="col-xs-4"><input type="checkbox"/><p>Lounge & Sleeping</p></span>
      </div>
      <div className="row buyerRegistration_inputField checkbox">
        <div className="row buyerRegistration_questions">How did you hear about us? <span className="asterisk">*</span></div>
        <span className="row"><select name="" id="" className="col-xs-6 left"><option value="">Choose one</option></select><input type="text" className="col-xs-6 right"/></span>
      </div>
      <div className="row buyerRegistration_inputField buyerRegistration_btn_container buyerRegistration_subtitle">
        <button className="col-xs-4 back btn">&#60; Back</button>
        <button className="col-xs-4 reset btn">Reset</button>
        <button className="col-xs-4 next btn">Next ></button>
      </div>

    </form>
  </div>
);
export default BusinessInformation;