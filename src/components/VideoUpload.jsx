"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import NevigationButtons from "./NevigationButtons";
import Image from "next/image";
import uploadImage from "../assets/uploadfilled.png";
import Input from "./Input";
import FormHeading from "./FormHeading";
import { useRouter } from "next/navigation";

const VideoUpload = ({
  video,
  errors = {},
  handleFileChange,
  handleInputChange,
  handleNext,
  onBack,
}) => {
  return (
    <div className="relative items-center h-full justify-center p-4">
      <FormHeading
        title={"Video"}
        content={"Control your availability by selecting these slots."}
      />

      <div className="bg-[#f1f7fa87] z-20 relative rounded-lg shadow-md p-6 w-full">
        <div
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-4 relative bg-[#F1F7FA]"
        >
          <label
            htmlFor="file-upload"
            className="border-2 cursor-pointer border-dashed bg-white border-gray-300 rounded-md p-11 mb-4 flex flex-col items-center justify-center"
          >
            <div className="flex gap-2">
              <Image
                src={uploadImage}
                alt="upload"
                className="h-4 w-4"
                height={1000}
                width={1000}
              />
              <p className="text-[#646464] text-xs">
                Drag and drop your files here
              </p>
            </div>
            <p className="text-gray-400 my-3 text-sm">OR</p>
            {/* <button className="text-xs p-2 bg-[#38B6FF] text-white rounded-lg font-semibold">choose file</button> */}
            <label
              htmlFor="fileType"
              className="text-xs p-2 bg-[#38B6FF] text-white rounded-lg font-semibold cursor-pointer"
            >
              Upload File
              <Input
                type="file"
                accept="video/mp4"
                onChange={(e) =>
                  handleFileChange("video", e.target.files[0], "SET_VIDEO")
                }
                className="hidden" // Hide the default file input appearance
                id="fileType"
              />
            </label>
            {errors.video && (
              <p className="text-red-500 mt-2">{errors.video}</p>
            )}
          </label>
          <p className="text-xs font-semibold">Add Video URL</p>
          <Input
            type={"text"}
            name={"videoUrl"}
            placeholder={"Video URL"}
            value={video?.videoUrl || ""}
            onChange={(e) =>
              handleInputChange(e.target.name, e.target.value, "SET_VIDEO")
            }
          />
          {errors.videoUrl && (
            <p className="text-red-500 text-xs">{errors.videoUrl}</p>
          )}
          <NevigationButtons
            backText="Previous "
            nextText="Next"
            onNext={handleNext}
            onBack={onBack}
          />
        </div>
      </div>
      {/* circle */}
      <div className="absolute top-[90%] -left-5 z-0 h-[50px] w-[50px] rounded-full bg-[#38b6ff]"></div>
    </div>
  );
};

export default VideoUpload;
