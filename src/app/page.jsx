"use client";
import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import AboutForm from "../components/AboutForm";
import ProfileUpload from "../components/ProfileForm";
import { initialState } from "../reducers/initialState";
import { formReducer } from "../reducers/formReducer";
import { validationSchemas } from "../reducers/velidationScema";
import HeaderSection from "../components/HeaderSecton";
import VideoUpload from "../components/VideoUpload";
import EducationUpload from "../components/EducationUpload";
import Stepper from "../components/Stepper";
import Availability from "@/components/Availability";
import aboutImage from "../assets/about.png";
import profileImage from "../assets/profile.png";
import videoImage from "../assets/video.png";
import educationImage from "../assets/educationImage.png";
import availabilityImage from "../assets/availability.png";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { personalInfo, profile, video, education, errors, availability } =
    state;
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleInputChange = (name, value, type) => {
    dispatch({
      type,
      payload: { name, value },
    });
  };

  const handleFileChange = (name, file, actionType) => {
    dispatch({
      type: actionType,
      payload: { name, value: file },
    });
  };
  

  const validateForm = async (step) => {
    try {
      let formData;
      switch (step) {
        case 1:
          formData = state.personalInfo;
          break;
        case 2:
          formData = state.profile;
          break;
        case 3:
          formData = state.video;
          break;
        case 4:
          formData = state.education;
          break;
        case 5:
          formData = state.availability;
          break;
        case 6:
          formData = state.subjectsAndCurrency;
          break;
        default:
          return true;
      }

      await validationSchemas[step - 1].validate(formData, {
        abortEarly: false,
      });
      return true;
    } catch (error) {
      console.error("Validation Error:", error);
      const validationErrors = {};
      if (error.inner) {
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
      } else {
        validationErrors["_error"] = error.message || "Validation failed";
      }
      dispatch({ type: "SET_ERRORS", payload: validationErrors });
      return false;
    }
  };

  const handleNext = async (step) => {
    const isValid = await validateForm(step);
    if (isValid) {
      setCurrentStep(step + 1);
    }
  };

  const handleBack = (step) => {
    setCurrentStep(step - 1);
  };

  const handleSubmit = async () => {
    const isValid = await validateForm(currentStep);
    if (isValid) {
      console.log(personalInfo, profile, video, education, availability);
      router.push("/Submission");
    }
  };

  const gradStyle = {
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(211,239,255,1) 100%)",
  };

  return (
    <div style={gradStyle} className="py-6 mx-auto">
      <div className="">
        <Stepper currentStep={currentStep} />
      </div>
      {currentStep === 1 && (
        <HeaderSection
          imageSrc={aboutImage}
          form={
            <AboutForm
              personalInfo={personalInfo}
              errors={errors}
              handleInputChange={handleInputChange}
              handleNext={() => handleNext(1)}
              onNext={handleSubmit}
            />
          }
        />
      )}
      {currentStep === 2 && (
        <HeaderSection
          imageSrc={profileImage}
          form={
            <ProfileUpload
              profile={profile}
              errors={errors}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              handleNext={() => handleNext(2)}
              onBack={() => handleBack(currentStep)}
            />
          }
        />
      )}
      {currentStep === 3 && (
        <HeaderSection
          imageSrc={videoImage}
          form={
            <VideoUpload
              video={video}
              errors={errors}
              handleFileChange={handleFileChange}
              handleInputChange={handleInputChange}
              handleNext={() => handleNext(3)}
              onBack={() => handleBack(currentStep)}
            />
          }
        />
      )}
      {currentStep === 4 && (
        <HeaderSection
          imageSrc={educationImage}
          form={
            <EducationUpload
              education={education}
              errors={errors}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              handleNext={() => handleNext(4)}
              onBack={() => handleBack(currentStep)}
            />
          }
        />
      )}
      {currentStep === 5 && (
        <HeaderSection
          imageSrc={availabilityImage}
          form={
            <Availability
              availability={availability}
              handleSubmit={() => handleSubmit()}
              onBack={() => handleBack(currentStep)}
              errors={errors}
              state={state}
              dispatch={dispatch}
            />
          }
        />
      )}
    </div>
  );
};

export default MultiStepForm;
