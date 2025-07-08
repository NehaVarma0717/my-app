import React from 'react';

// Safe Capitalize function
const Capitalize = (word) => {
  if (!word || typeof word !== 'string') return '';
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

function Alert(props) {
  // Only render if alert exists and has the required fields
  if (!props.alert || !props.alert.type || !props.alert.msg) return null;

  return (
    <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
        <use href="#check-circle-fill" />
      </svg>
      <div>
        <strong>{Capitalize(props.alert.type)}: </strong>{props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
