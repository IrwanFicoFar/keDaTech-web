import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="absolute w-[25%] ">
      <Image
        src={"/bg-logo.png"}
        width={1200}
        height={1200}
        objectFit="cover"
        alt="bg-logo"
        className="relative"
      />
      <div className="absolute top-16 left-16">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          objectFit="cover"
          alt="logo"
          className="relative"
        />
      </div>
    </div>
  );
};
