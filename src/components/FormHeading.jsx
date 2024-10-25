import React from 'react';

const FormHeading = ({ title, content }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-gray-800">{title}</h1>
      <p className="text-black mb-6 text-sm">{content}</p>
    </div>
  );
}

export default FormHeading;
