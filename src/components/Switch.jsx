
const Switch = ({ checked, onChange,index }) => {
  // console.log("checked...",checked,index);
  return (
    <button
    checked={checked}

      onClick={onChange}
      className={`relative inline-flex items-center cursor-pointer h-6 rounded-full w-11 transition-colors duration-300 ${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block w-5 h-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default Switch;
