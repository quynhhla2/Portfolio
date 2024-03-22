import React from "react";
import Image from "next/image";

const Banner = ({ bannerImage }) => {
  return (
    <div>
      <div>
        <Image 
            src={bannerImage} 
            alt="background"
            width={1600}
            height={300}
        />
      </div>
    </div>
  );
};

export default Banner;
