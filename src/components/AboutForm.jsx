"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import NevigationButtons from "./NevigationButtons";
import FormHeading from "./FormHeading";
import Example from "./Example";
import { useRouter } from "next/navigation";
import { isValidPhoneNumber } from "react-phone-number-input";
import countryList from "react-select-country-list";
import Navbar from "./Navbar";

const AboutForm = ({
  personalInfo,
  errors = {},
  handleInputChange,
  handleNext,
  onBack,
}) => {
  //
  useEffect(() => {
    console.log("Form Data after update:", personalInfo);
  }, [personalInfo]);

  const router = useRouter();

  const onSubmit = async () => {
    const isValid = await handleNext(1);
    // if (isValid) {
    //   router.push("/profile");
    // }
  };
  const countryOption = countryList().getData();

  // Validation function for PhoneInput component
  const validatePhone = (value) => {
    if (!value) return "Phone number is required";
    if (!isValidPhoneNumber(value)) return "Invalid phone number";
    return undefined;
  };


  return (
    <div className="relative w-full flex flex-col px-5">
      <FormHeading
        title={"Write about yourself"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Volutpat lacus semper amet sed dui aliquam lacus sed pellentesque. Feugiat ullamcorper euismod purus massa. Commodo pellentesque mauris sem molestie consequat pretium. Lectus morbi est."
        }
      />

      <div className="relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="relative z-10 bg-gradient-to-l bg-[#F1F7FA] from-[#f1faf9] to-transparent p-5 rounded-lg border bg-[#f1f7fa9c]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="First Name*"
                className={`border ${errors.firstName ? "border-red-500" : ""}`}
                name="firstName"
                value={personalInfo?.firstName || ""}
                onChange={(e) =>
                  handleInputChange(
                    e.target.name,
                    e.target.value,
                    "SET_PERSONAL_INFO"
                  )
                }
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Last Name*"
                className={`border ${errors.lastName ? "border-red-500" : ""}`}
                name="lastName"
                value={personalInfo?.lastName || ""}
                onChange={(e) =>
                  handleInputChange(
                    e.target.name,
                    e.target.value,
                    "SET_PERSONAL_INFO"
                  )
                }
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address*"
                className={`border ${errors.email ? "border-red-500" : ""}`}
                name="email"
                value={personalInfo?.email || ""}
                onChange={(e) =>
                  handleInputChange(
                    e.target.name,
                    e.target.value,
                    "SET_PERSONAL_INFO"
                  )
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <Select
                options={[
                  { value: "", label: "Select Gender", disabled: true },
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
                className={`border ${errors.gender ? "border-red-500" : ""}`}
                name="gender"
                value={personalInfo?.gender || ""}
                onChange={(e) =>
                  handleInputChange(
                    e.target.name,
                    e.target.value,
                    "SET_PERSONAL_INFO"
                  )
                }
              />
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )}
            </div>
            <div className="w-full">
              <Example
                value={personalInfo?.phoneNumber || ""}
                onChange={(value) =>
                  handleInputChange("phoneNumber", value, "SET_PERSONAL_INFO")
                }
                error={errors.phoneNumber}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}{" "}
            </div>
            <div>
              <Select
                placeholder={"Select country"}
                options={countryOption}
                className={`border ${errors.country ? "border-red-500" : ""}`}
                name="country"
                value={personalInfo?.country || ""}
                onChange={(e) =>
                  handleInputChange(
                    e.target.name,
                    e.target.value,
                    "SET_PERSONAL_INFO"
                  )
                }
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
          </div>
          <NevigationButtons
            backText="Previous "
            nextText="Next"
            onNext={onSubmit}
          />
        </form>
        <div className="absolute top-[90%] -left-5 z-0 h-[50px] w-[50px] rounded-full bg-[#38b6ff]"></div>
      </div>
    </div>
  );
};

export default AboutForm;
