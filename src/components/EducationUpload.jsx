"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import NevigationButtons from "./NevigationButtons";
import { FaRegFilePdf } from "react-icons/fa";
import Input from "./Input";
import FormHeading from "./FormHeading";
import cvIcon from "../assets/cvIcon.png";
import Image from "next/image";
import Button from "./Button";

const EducationUpload = ({
  handleNext,
  onBack,
  education,
  errors,
  handleFileChange,
  handleInputChange,
}) => {
  const onSubmit = async () => {
    const isValid = await handleNext(4);
    if (isValid) {
      router.push("/availability");
    }
  };

  return (
    <div className="relative w-full">
      <FormHeading
        title={"Education"}
        content={
          "Tell students more about the higher education that you've completed or are working on"
        }
      />

      <div className="rounded-lg relative z-10 bg-[#F1F7FA] p-2 w-full border border-gray-300">
        <div className="rounded-md z-10 p-4 mb-4 flex flex-col items-center justify-center bg-[#F1F7FA]">
          <form
            className="w-full relative z-10 bg-[#f1f7fa9c]"
            onSubmit={onSubmit}
          >
            <div className="mx-auto py-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder={"University"}
                    name="university"
                    value={education.university}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.name,
                        e.target.value,
                        "SET_EDUCATION"
                      )
                    }
                  />
                  {errors.university && (
                    <p className="text-red-500 text-sm">{errors.university}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder={"Degree"}
                    name="degree"
                    value={education.degree}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.name,
                        e.target.value,
                        "SET_EDUCATION"
                      )
                    }
                  />
                  {errors.degree && (
                    <p className="text-red-500 text-sm">{errors.degree}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder={"Degree type"}
                    name="degreeType"
                    value={education.degreeType}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.name,
                        e.target.value,
                        "SET_EDUCATION"
                      )
                    }
                  />
                  {errors.degreeType && (
                    <p className="text-red-500 text-sm">{errors.degreeType}</p>
                  )}
                </div>
                <div className="flex items-center">
                  <Input
                    type={"number"}
                    placeholder={"Year of study"}
                    name="yearOfStudy"
                    value={education.yearOfStudy}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.name,
                        e.target.value,
                        "SET_EDUCATION"
                      )
                    }
                  />
                  {errors.yearOfStudy && (
                    <p className="text-red-500 text-sm">{errors.yearOfStudy}</p>
                  )}
                  <span className="mx-2 text-lg">-</span>
                  <Input
                    type={"number"}
                    placeholder={"End of study"}
                    name="endOfStudy"
                    value={education.endOfStudy}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.name,
                        e.target.value,
                        "SET_EDUCATION"
                      )
                    }
                  />
                  {errors.endOfStudy && (
                    <p className="text-red-500 text-sm">{errors.endOfStudy}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="border-2 w-[50%] border-dashed border-gray-300 bg-white rounded-md px-2 py-2">
                <Input
                  type="file"
                  id="upload-document"
                  name="document"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) =>
                    handleFileChange(
                      e.target.name,
                      e.target.files[0],
                      "SET_EDUCATION"
                    )
                  }
                />
                {errors.document && (
                  <p className="text-red-500 text-sm">{errors.document}</p>
                )}

                <label
                  htmlFor="upload-document"
                  className="cursor-pointer w-full text-center bg-white"
                >
                  <div className="flex flex-col items-center bg-white">
                    <p className="text-[#565656] flex gap-4 text-xs">
                      <span className="w-30 h-30">
                        {/* <FaRegFilePdf
                        height={30}
                        width={30}
                        className="w-30 h-30"
                      /> */}
                        <Image
                          alt="file"
                          src={cvIcon}
                          width={1000}
                          height={1000}
                          className="w-4 h-4"
                        />
                      </span>
                      Upload a Document{" "}
                      <span className="text-gray-400">or</span> Drop CV here
                    </p>
                    <p className="text-black font-semibold mt-3 text-xs">
                      Supports PDFs, DOCs & DOCXs{" "}
                      <span className="text-[#A8A8A8] text-xs">(Max: 5MB)</span>
                    </p>
                  </div>
                </label>
                {/* {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>} */}
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className={
                    "border border-red-500 shadow-md bg-[#38B6FF] text-white p-1 text-xs font-semibold"
                  }
                >
                  Add Education
                </Button>
              </div>
            </div>
            <NevigationButtons onNext={handleNext} onBack={onBack} />
          </form>
        </div>
      </div>
      {/* circle */}
      <div className="absolute top-[90%] -left-5 z-0 h-[50px] w-[50px] rounded-full bg-[#38b6ff]"></div>
    </div>
  );
};

export default EducationUpload;
