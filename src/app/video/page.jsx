import React from 'react'
import HeaderSection from '../../components/HeaderSecton';
import VideoUpload from '../../components/VideoUpload';
import videoImage from '../../assets/video.png'

function page() {

    const gradStyle = {
        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(211,239,255,1) 100%)"
      };
      
    
      return (
        <div className="p-8 max-w-7xl mx-auto" style={gradStyle} >
          {/* <Stepper /> */}
          <HeaderSection imageSrc={videoImage} form={<VideoUpload />} />
        </div>
      );
}

export default page