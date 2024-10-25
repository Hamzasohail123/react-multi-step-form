import React from "react";

function Stepper({ currentStep }) {
  const steps = [
    "About",
    "Profile Image",
    "Video",
    "Education",
    "Availability",
  ];

  return (
    <div className="flex items-start max-w-screen-lg mx-auto pb-7 pl-9">
      {steps.map((step, index) => (
        <div className="w-full" key={step}>
          <div className="flex items-center w-full">
            <div
              className={`w-4 h-4 shrink-0 mx-[-1px] ${index + 1 <= currentStep ?  'bg-[#38b6ff]' : 'bg-white'} p-6 flex items-center justify-center rounded-full`}
            >
              <span className={`text-base ${index + 1 <= currentStep ? "text-white" : 'text-[#A2A2A2]'}`}>0{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-full h-0.5 mx-4 rounded-lg ${index + 1 <= currentStep ? "bg-[#38B6FF]" : 'bg-[#a2a2a2]'}`}></div>
            )}
          </div>
          <div className={`mt-2 mr-4 ${step === "Subject & Pricing" ? "-ml-5" : ""}`}>
            <h6 className={`text-xs font-bold text-black ${index + 1 <= currentStep ? 'text-black' : 'text-[#A2A2A2]'}`}>
              {step}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
