"use client";
import { useState, useEffect } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


function Example({ value, onChange, error }) {
  // State for storing phone number value
  const [phoneNumber, setPhoneNumber] = useState(value || '');

  return (
    <div className="relative w-full bg-white border-0 border-red-500">
      <PhoneInput
        className={`block px-3 py-2 outline-none focus:outline-none placeholder-gray-400 border ${error ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        placeholder="Enter phone number"
        defaultCountry='PK'
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}

export default Example;

