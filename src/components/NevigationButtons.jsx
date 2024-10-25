import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const NavigationButtons = ({ backText, nextText, onBack, onNext }) => {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex items-center gap-2" onClick={onBack}>
        <div className="p-1 bg-white rounded-full cursor-pointer">
          <IoIosArrowRoundBack className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold">{backText}</p>
      </div>
      <div className="flex items-center gap-2" onClick={onNext}>
        <p className="text-xs font-semibold">{nextText}</p>
        <div className="p-1 bg-white rounded-full cursor-pointer">
          <IoIosArrowRoundForward className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
