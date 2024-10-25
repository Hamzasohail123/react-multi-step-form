import React from 'react'
import Availability from '../../components/Availability';
import availabilityImage from '../../assets/availability.png'
import HeaderSection from '../../components/HeaderSecton';

function page() {
    const gradStyle = {
        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(211,239,255,1) 100%)"
      };
      
    
      return (
        <div className="p-8 max-w-7xl mx-auto" style={gradStyle} >
          {/* <Stepper /> */}
          <HeaderSection imageSrc={availabilityImage} form={<Availability />} />
        </div>
      );
    
}

export default page