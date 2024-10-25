import React from 'react';

const Textarea = ({ placeholder, name, className, onChange, value, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}      
      name={name}
      onChange={onChange}
      value={value}
      {...props}
      className={`w-full h-full ${className}`}
    ></textarea>
  );
}

export default Textarea;
