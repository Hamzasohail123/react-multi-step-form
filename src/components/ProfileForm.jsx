"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import tick from "../assets/tick.png";
import Textarea from "./Textarea";
import NevigationButtons from "./NevigationButtons";
import FormHeading from "./FormHeading";
import { useRouter } from "next/navigation";
import Input from "./Input";

const ProfileUpload = ({
  profile,
  handleInputChange,
  handleFileChange,
  handleNext,
  onBack,
  errors,
}) => {
  const checklistItems = [
    {
      src: tick,
      text: "You should be facing forward",
    },
    {
      src: tick,
      text: "Frame your head and shoulders",
    },
    {
      src: tick,
      text: "You should be centered and upright",
    },
    {
      src: tick,
      text: "Your face and eyes should be visible",
    },
    {
      src: tick,
      text: "You should be the only person in photo",
    },
    {
      src: tick,
      text: "Use a color photo with height resolution and no filters",
    },
    {
      src: tick,
      text: "Avoid logo of contact information",
    },
  ];

  const router = useRouter();

  const onSubmit = async () => {
    const isValid = await handleNext(2);
    if (isValid) {
      router.push("/video");
    }
  };

  return (
    <div className="relative">
      <FormHeading
        title={"Profile Photo"}
        content={"Choose a photo that will elp learners get know you"}
      />

      <div className="bg-[#f1f7fa9c] -mt-5">
        <div className="flex flex-col relative z-10 md:flex-row  py-5 bg-[#f1f7fa9c]  rounded-lg border-0 border-red-500">
          {/* left side */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="border-r-[2px] px-6 py-2 lg:w-[50%]"
          >
            <div className="flex items-end justify-between">
              <div className="border-2 border-dashed p-3 bg-white border-gray-300 w-auto flex flex-col justify-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <p className="text-xs text-center pb-2 text-gray-500 font-medium">
                    Upload an image
                  </p>
                  <p className="text-xs text-center pb-2 font-semibold">
                    Supports PNGs, JPGs & JPEGs
                  </p>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".jpeg,.png,.jpg"
                  onChange={(e) =>
                    handleFileChange(
                      "profilePhoto",
                      e.target.files[0],
                      "SET_PROFILE"
                    )
                  }
                  className="hidden"
                />
                {errors.profilePhoto && (
                  <p className="text-red-500 text-xs">{errors.profilePhoto}</p>
                )}
              </div>

              <div className="ml-4">
                <Button
                  id="file-upload"
                  type="file"
                  accept=".jpeg,.png,"
                  onChange={(e) =>
                    handleFileChange(
                      "profilePhoto",
                      e.target.files[0],
                      "SET_PROFILE"
                    )
                  }
                  className={"w-full bg-[#38b6ff] text-white shadow-lg text-xs"}
                >
                  {"upload"}
                </Button>
              </div>
            </div>

            <div className="bg-white mt-10 h-[50%]">
              <Textarea
                placeholder="Profile Description"
                name="profileDescription"
                className={`border ${
                  errors.profileDescription ? "border-red-500" : ""
                } rounded-md p-2`}
                value={profile.profileDescription}
                onChange={(e) =>
                  handleInputChange(
                    e.target.name,
                    e.target.value,
                    "SET_PROFILE"
                  )
                }
              />
              {errors.profileDescription && (
                <p className="text-red-500 text-xs">
                  {errors.profileDescription}
                </p>
              )}
            </div>
          </form>

          {/* right side */}
          <div className="border-0 border-red-500 px-6 py-2 lg:w-[50%]">
            <p className="text-xs font-semibold ml-4">Whats your photo needs</p>
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 py-3">
                <Image
                  height={1000}
                  width={1000}
                  src={item.src}
                  alt="tick"
                  className="w-2 h-2"
                />
                <p className="text-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 -mt-14">
          <NevigationButtons
            nextText={"Next"}
            backText={"Back"}
            onNext={onSubmit}
            onBack={onBack}
          />
        </div>
      </div>
      {/* circle */}
      <div className="absolute top-[93%] -left-5 z-0 h-[50px] w-[50px] rounded-full bg-[#38b6ff]"></div>
    </div>
  );
};

export default ProfileUpload;
