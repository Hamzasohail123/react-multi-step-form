import React from "react";
import { LuPlus } from "react-icons/lu";

const AddEducation = ({ onClick, addedEducations }) => {
  return (
    <div>
      <div className="w-full mb-2 flex justify-between items-center">
        <div className="">
          <h3 className="text-gray-600 text-xs font-semibold mb-1">
            Add Education
          </h3>
          <p className="text-gray-600 mb-4 text-xs text-start">
            Please click on + to Add Education
          </p>
        </div>
        <div
          className="p-1 rounded-full bg-white cursor-pointer"
          onClick={onClick}
        >
          <LuPlus />
        </div>
      </div>
      <div>
        {/* {addedEducations.map((edu, index) => (
          <div
            key={index}
            className="border-2 bg-[#38B6FF] text-white font-semibold px-3 border-blue-400 inline p-1"
          >
            <span className="text-xs py-3 rounded bg-">
              {edu.subject} - {edu.level}
            </span>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default AddEducation;
