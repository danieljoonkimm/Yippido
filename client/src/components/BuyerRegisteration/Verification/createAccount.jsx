import React from 'react';
import './verification.scss';

const CreateAccount = () => (
  <div className="verification_container">
    <div className="buyerRegistration_subtitle">
      <span>
        <h1>Create Account</h1>
        <h1>Email Verify</h1>
      </span>
    </div>
    <div className="row buyerRegistration_inputField">
      <p className="service_agreement">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <span className="full serviceAgreement_checkbox" id="checkbox1"><input type="checkbox"/><p className="inputField_checkbox"> I agree to the Vast e Tech Terms of Use</p></span>
      <p className="service_agreement">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <span className="full serviceAgreement_checkbox" id="checkbox1"><input type="checkbox"/><p className="inputField_checkbox"> I agree to the Buyer Serives Agreement</p></span>
      <span className="full serviceAgreement_checkbox" id="checkbox1"><input type="checkbox"/><p className="inputField_checkbox"> I agree to receive special offers and product & service update emails from Vast e Tech</p></span>
    </div>
    <div className="row buyerRegistration_btn_container buyerRegistration_subtitle">
      <button className="serviceAgreement_btn btn">Create Account</button>
    </div>
  </div>
);
export default CreateAccount;