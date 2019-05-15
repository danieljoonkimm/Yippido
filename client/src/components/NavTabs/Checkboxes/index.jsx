// import React from 'react';

// const Checkboxes = ({ label, isSelected, onCheckboxChange }) => (
//   <div>
//     <label htmlFor="">
//       <input type="checkbox" 
//       name={label}
//       checked={isSelected}
//       onChange={onCheckboxChange}
//       />
//     </label>
//   </div>
// )
import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;
// export default Checkboxes;