import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

import CoverBody from "../../../public/cover.png";
import PriceSquare from "../../../public/priceSquare.png";
import BackCover from "../../../public/back-cover.png";
import Checklist from "../../../public/checklist.png";

export const CardPrice = ({
  imageResource,
  title,
  price,
  children,
}: {
  imageResource: StaticImageData;
  title: string;
  price: number;
  children: ReactNode;
}) => {
  return (
    <div className="h-96 hover:scale-110 hover:-translate-y-2 duration-300 ease-in-out">
      <div className="relative drop-shadow-lg hover:drop-shadow-2xl">
        <Image
          src={BackCover}
          width={500}
          height={100}
          alt="back cover"
          className="absolute lg:top-0 z-10"
        />
        <div className="flex justify-center">
          <div className="absolute -top-2 hover:-top-24 duration-300 ease-in-out z-20 flex justify-center">
            <Image
              src={imageResource}
              width={250}
              height={100}
              alt="back cover"
              className="w-[80%]"
            />
            <div className="absolute flex flex-col gap-5 justify-center mt-5 z-20">
              <p className="text-xl text-white font-bold uppercase text-center">
                {title}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500 font-bold uppercase text-center">
                  Rp {price}K
                </p>
                <p className="uppercase text-white font-medium text-center">
                  / month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 z-30">
          <Image
            src={CoverBody}
            width={500}
            height={1000}
            alt="back cover"
            className=""
          />
          <div className="absolute top-5 p-10 mt-2 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const CardChecklist = ({ description }: { description: string }) => {
  return (
    <div className="flex gap-2 items-center text-lg py-2 border-b-2 border-spacing-4 border-gray-200 ">
      <Image
        src={Checklist}
        width={32}
        height={32}
        alt="back cover"
        className=""
      />
      <p>{description}</p>
    </div>
  );
};
