import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="absolute w-36 sm:w-44 md:w-[25%] ">
      <Image
        src={"/bg-logo.png"}
        width={1200}
        height={1200}
        objectFit="cover"
        alt="bg-logo"
        className="relative"
      />
      <div className="absolute top-6 left-4 md:top-10 md:left-6 lg:top-14 lg:left-8 xl:top-14 xl:left-16 2xl:top-24 2xl:left-16">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          objectFit="cover"
          alt="logo"
          className="relative w-24 lg:w-32 xl:w-36"
        />
      </div>
    </div>
  );
};
