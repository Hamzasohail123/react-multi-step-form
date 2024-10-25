"use client";
import React, { useEffect, useReducer, useState } from "react";
import NavigationButtons from "./NevigationButtons";
import AddEducation from "./AddEducation";
import Select from "./Select";
import Button from "./Button";
import Input from "./Input";
import FormHeading from "./FormHeading";
import SubjectModal from "./SubjectModal";
import {
  initialState,
  formReducer,
  validationSchemas,
} from "../components/reducer";

const SubjectsPricing = ({
  onBack,
  // subjectsAndCurrency,
  handleInputChange,
  handleNext,
  error,
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { subjectsAndCurrency } = state;
  const [showModal, setShowModal] = useState(false);

  console.log("initial satte of subject and pricing", subjectsAndCurrency);

  const subjectss = ["Math", "Science", "History", "English"]; // Example subjects array
  const levels = ["O Level", "A Level", "IB"]; // Example levels array

  const currencyOptions = [
    { value: "AED", label: "AED" },
    { value: "USD", label: "USD" },
    { value: "PKR", label: "PKR" },
  ];

  const curriculums = [
    { value: "mathematics", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "history", label: "History" },
    { value: "english", label: "English Language Arts" },
    { value: "computer-science", label: "Computer Science" },
  ];

  const handleAddSubject = (index, subject, level) => {
    const newSubjects = [...subjectss];
    newSubjects[index].addedEducations.push({ subject, level });
    dispatch({ type: "SET_SUBJECTS", payload: newSubjects });
    setShowModal(false);
  };

  const handleChange = async (index, field, value) => {
    console.log("valllllll", value);
    const newSubjects = [...subjectss];
    newSubjects[index] = {
      ...newSubjects[index],
      [field]: value,
    };
    await dispatch({ type: "SET_SUBJECTS", payload: newSubjects });
  };
  const handleInput = async (field, value) => {
    let updatedSubject = {
      ...subjectsAndCurrency,
      [field]: value,
    };
    console.log("updateddddd subject", updatedSubject);
    await dispatch({ type: "SET_SUBJECTS", payload: updatedSubject });
  };

  const handleSubmit = () => {
    // Validate form
    // const errors = validateSubjects(subjects);
    // if (errors.some((error) => Object.keys(error).length > 0)) {
    //   setFormErrors(errors);
    //   return;
  };

  // Submit form data
  // console.log("Form Data:", { subjects });
  // };

  return (
    <div className="flex-col justify-center p-6">
      <div key={index}>
        <FormHeading
          title={"Subjects & Pricing"}
          content={"Lorem ipsum dolor sit amet consectetur. Amet."}
        />
        <div className="bg-[#F1F7FA] rounded-lg p-6 w-full max-w-2xl">
          <div className="p-4 rounded-lg mb-6">
            <div className="py-4">
              <AddEducation
                onClick={() => {
                  // setCurrentIndex(index);
                  setShowModal(true);
                }}
                // addedEducations={subject.addedEducations}
              />
              <div>
                <label className="block mt-3 text-black text-xs font-semibold mb-2">
                  Select Curriculum
                </label>
                <Select
                  value={subjectsAndCurrency.curriculum}
                  name="curriculum"
                  placeholder="Select Curriculum"
                  onChange={(e) =>
                    handleChange(index, e.target.name, e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                  options={curriculums}
                />
                {/* <Select
                      value={subject.curriculum}
                      name="curriculum"
                      placeholder="Select Curriculam"
                      onChange={(e) =>
                        handleChange(
                          // e.target.name,
                          // e.target.value,
                          // "SET_SUBJECTS"
                          index,

                        )
                      }
                      className="w-full border border-gray-300 rounded-md p-2 mb-4"
                      options={curriculums}
                    /> */}
                {/* <Select
                      value={subject.curriculum}
                      // onChange={(e) =>
                      //   handleChange(index, "curriculum", e.target.value)
                      // }
                      className="w-full border border-gray-300 rounded-md p-2 mb-4"
                      options={subject.curriculums}
                    /> */}
                {/* {formErrors[index]?.curriculum && (
              <p className="text-red-500 text-sm">
                {formErrors[index].curriculum}
              </p>
            )} */}
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-1/2">
                  <label className="block text-black text-xs font-semibold mb-2">
                    Hours / Week
                  </label>
                  <Input
                    name="hoursPerWeek"
                    type="text"
                    placeholder="Mention Hours"
                    value={subjectsAndCurrency.hoursPerWeek}
                    onChange={(e) =>
                      handleInput("hoursPerWeek", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md p-2"
                  />

                  <div>{subjectsAndCurrency.hoursPerWeek}</div>
                  {/* {formErrors[index]?.hoursPerWeek && (
                <p className="text-red-500 text-sm">
                  {formErrors[index].hoursPerWeek}
                </p>
              )} */}
                </div>
                <div className="w-1/2">
                  <label className="block text-black text-xs font-semibold mb-2">
                    Hourly Rate
                  </label>
                  <div className="flex gap-2">
                    <Select
                      value={subjectsAndCurrency.currency}
                      name="currency"
                      placeholder="Select Currency"
                      onChange={(e) =>
                        handleChange(index, e.target.name, e.target.value)
                      }
                      className="w-1/2 text-sm border border-gray-300 rounded-md p-2 "
                      options={currencyOptions}
                    />
                    {/* <select
                          value={subject.currency}
                          // onChange={(e) =>
                          //   handleChange(index, "currency", e.target.value)
                          // }
                          className="w-1/2 text-sm border border-gray-300 rounded-md p-2 "
                        >
                          {currencyOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="text-xs"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select> */}
                    <Input
                      type="number"
                      name="hourlyRate"
                      placeholder="Mention Rates"
                      value={subjectsAndCurrency.hourlyRate || ""}
                      onChange={(e) =>
                        handleInputChange(
                          e.target.name,
                          e.target.value,
                          "SET_SUBJECTS"
                        )
                      }
                      className="w-1/2 text-sm border border-gray-300 rounded-md p-2 "
                    />
                  </div>
                  {/* {formErrors[index]?.hourlyRate && (
                <p className="text-red-500 text-sm">
                  {formErrors[index].hourlyRate}
                </p>
              )} */}
                </div>
              </div>
            </div>
          </div>
          <NavigationButtons onNext={handleSubmit} onBack={onBack} />
        </div>
      </div>

      {/* Modal for adding subject */}
      <SubjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={(subject, level) =>
          handleAddSubject(currentIndex, subject, level)
        }
        subjects={subjectss}
        levels={levels}
      />
    </div>
  );
};

export default SubjectsPricing;
