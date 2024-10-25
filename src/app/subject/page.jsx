import React from 'react'
import SubjectsPricing from '../../components/SubjectPricing';
import HeaderSection from '@/components/HeaderSecton';
import subjectImage from '../../assets/subject.png'


function page() {
    const gradStyle = {
        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(211,239,255,1) 100%)"
      };
      
    
      return (
        <div className="p-8 max-w-7xl mx-auto" style={gradStyle} >
          {/* <Stepper /> */}
          <HeaderSection imageSrc={subjectImage} form={<SubjectsPricing />} />
        </div>
      );
}

export default page