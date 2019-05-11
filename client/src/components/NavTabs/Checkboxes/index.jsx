import React from 'react';

const Checkboxes = ({ label, isSelected, onCheckboxChange }) => (
  <div>
    <label htmlFor="">
      <input type="checkbox" 
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
      />
    </label>
  </div>
)
export default Checkboxes;