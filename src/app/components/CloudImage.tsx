import Image from "next/image";
import React from "react";

export const CloudImage1 = () => {
  return (
    <div className="absolute top-[400px] right-0 z-10 w-full h-[40%] sm:w-[80%] md:w-[60%] ">
      <Image
        src={"/cloud-1.png"}
        width={1000}
        height={1000}
        objectFit="cover"
        alt="cloud Image 1"
      />
    </div>
  );
};

export const CloudImage2 = () => {
  return (
    <>
      <div className="absolute top-[1700px] sm:top-[1800px] md:top-[1900px] lg:top-[1500px] xl:top-[1700px]  left-0 z-10 sm:w-[500px] md:w-[30%]">
        <Image
          src={"/cloud-2a.png"}
          width={1000}
          height={1000}
          objectFit="cover"
          alt="cloud Image 1"
        />
      </div>
      <div className="absolute top-[2000px] sm:top-[2100px] md:top-[2100px] lg:top-[1700px] xl:top-[2000px] left-0 z-10 w-[50%] sm:w-[300px] md:w-[20%]">
        <Image
          src={"/cloud-2b.png"}
          width={1000}
          height={1000}
          objectFit="cover"
          alt="cloud Image 1"
        />
      </div>
    </>
  );
};

export const CloudImage3 = () => {
  return (
    <div className="bottom-0 z-10 w-full">
      <Image
        src={"/cloud-3.png"}
        width={1700}
        height={1700}
        objectFit="cover"
        alt="cloud Image 1"
      />
    </div>
  );
};
