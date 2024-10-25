import React from 'react';

const Button = ({ type, onClick, className, children,...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`px-6 py-2 rounded-lg shadow-sm focus:outline-none ${className}`}
    >
      <span className="flex items-center">{children}</span>
    </button>
  );
};

export default Button;
