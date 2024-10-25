const Input = ({ value, type, placeholder, className, onChange, name,id, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      className={`block w-full text-xs shadow-sm sm:text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      placeholder={placeholder}
      value={value}  
      name={name}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input