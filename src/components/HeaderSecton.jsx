import React from 'react';
import Image from 'next/image';
// import Stepper from './Stepper';

const HeaderSection = ({ imageSrc, form }) => {
 
  return (
    <div>
    <header className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-[45%] flex items-center justify-center">
        <div className="w-[24rem] h-full md:mt-28">
          <Image
            src={imageSrc}
            alt="Profile"
            className=""
          />
        </div>
      </div>
      {/* Form Section */}
      <div className="w-full md:w-[55%] flex flex-col">
        {form}
      </div>
    </header>
    </div>
  );
};

export default HeaderSection;
