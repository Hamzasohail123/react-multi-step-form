import React from 'react';

const Select = ({ options, className, value,onChange,placeholder, ...props }) => {
  console.log("options",options);
  return (
    <select
    val={value}
    placeholder={placeholder}
      className={`block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onChange={onChange} 
      {...props}
    >
      {options && options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.displayName = 'Select';

export default Select;
