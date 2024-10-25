"use client";
import React, { useReducer } from "react";
import Switch from "./Switch";
import NavigationButtons from "./NevigationButtons";
import FormHeading from "./FormHeading";
import {
  initialState,
  formReducer,
  validationSchemas,
} from "../components/reducer";
const Availability = ({ handleSubmit, onBack, errors, state, dispatch }) => {
  // const [state, dispatch] = useReducer(formReducer, initialState);
  const { availability } = state;
  console.log("availabilityyyyyyyyy", availability);
  console.log(initialState);
  console.log("initial satte of avaialabilty", availability);
  const handleSwitchChange = (index) => {
    const newAvailabilityState = availability.map((day, idx) =>
      idx === index ? { ...day, enabled: !day.enabled } : day
    );
    console.log("new availabality", newAvailabilityState);
    dispatch({ type: "SET_AVAILABILITY", payload: newAvailabilityState });
    // console.log('updated availabikty',newAvailabilityState);
  };

  const handleTimeSlotClick = (dayIndex, timeSlotIndex) => {
    const newAvailabilityState = availability.map((day, index) =>
      index === dayIndex
        ? {
            ...day,
            timeSlots: day.timeSlots.map((slot, idx) =>
              idx === timeSlotIndex
                ? { ...slot, selected: !slot.selected }
                : slot
            ),
          }
        : day
    );

    dispatch({ type: "SET_AVAILABILITY", payload: newAvailabilityState });
  };

  console.log("avaialabity statee", state);

  return (
    <div>
      <div className="flex relative flex-col justify-center p-6">
        <FormHeading
          title={"Availability"}
          content={"Control your availability by selecting these slots."}
        />

        <div className="p-6 relative z-10 bg-[#f1f7fa9c] rounded-lg w-full">
          {availability?.length > 0 &&
            availability.map((day, dayIndex) => (
              <div key={dayIndex} className="grid grid-cols-1">
                <div className="grid grid-cols-4 w-full border-0 border-red-500">
                  <div className="flex items-center">
                    <Switch
                      checked={day.enabled}
                      index={dayIndex}
                      onChange={() => handleSwitchChange(dayIndex)}
                    />
                    <span className="text-gray-700 text-xs font-semibold ml-2">
                      {day.day}
                    </span>
                  </div>
                  {day.enabled &&
                    day.timeSlots.map((timeSlot, timeSlotIndex) => (
                      <div key={timeSlotIndex} className="m-1">
                        <div
                          onClick={() =>
                            handleTimeSlotClick(dayIndex, timeSlotIndex)
                          }
                          className={`${
                            timeSlot.selected
                              ? "bg-blue-600 text-white"
                              : "bg-gray-300 text-gray-700"
                          } text-xs px-4 py-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white w-full`}
                        >
                          {timeSlot.time}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          <NavigationButtons onNext={handleSubmit} onBack={onBack} />
        </div>
        <div className="absolute top-[88%] -left-2 z-0 h-[50px] w-[50px] rounded-full bg-[#38b6ff]"></div>
      </div>
    </div>
  );
};

export default Availability;
