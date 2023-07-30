import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CloudImage3 } from "./CloudImage";
import ImageLogo from "../../../public/logo-only.png";

import Map from "../../../public/Pin_fill@3x.png";
import Email from "../../../public/Message_fill@3x.png";
import Telpon from "../../../public/Phone_fill@3x.png";
import Facebook from "../../../public/Facebook.png";
import Twitter from "../../../public/Twitter.png";
import Instagram from "../../../public/Instagram.png";
import LinkedIn from "../../../public/LinkedIn.png";
import CopyRight from "../../../public/copy.png";

export const Footer = () => {
  return (
    <div className="relative">
      <CloudImage3 />
      <div className="absolute top-[40%] z-10 px-32 w-full">
        <div className="flex gap-5 items-center">
          <Image src={ImageLogo} width={72} height={72} alt="logo" />
          <p className="Capitalize text-2xl font-semibold text-white">
            PT Grow Teknologi
          </p>
        </div>
        <div className="grid grid-cols-4 mt-16 mx-8 text-white">
          <div className="flex flex-col col-span-2 gap-10">
            <p className="capitalize text-xl font-semibold">contact us</p>
            <div className="flex flex-col gap-3">
              <div className="text-lg flex gap-3 items-center">
                <Image src={Map} width={44} height={44} alt="address" />
                <p>Jl. teknologi maju no.23 DKI Jakarta</p>
              </div>
              <div className="text-lg flex gap-3 items-center">
                <Image src={Email} width={44} height={44} alt="address" />
                <p>hallo@grow.co.id</p>
              </div>
              <div className="text-lg flex gap-3 items-center">
                <Image
                  src={Telpon}
                  width={44}
                  height={44}
                  alt="address"
                  className="p-1"
                />
                <p>021-2345-2345</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <p className="capitalize text-xl font-semibold">link</p>
            <div className="flex flex-col gap-5">
              <Link href={"#about"} className="text-lg flex gap-3 items-center">
                <p className="capitalize">About Us</p>
              </Link>
              <div className="text-lg flex gap-3 items-center">
                <Link
                  href={"#pricing"}
                  className="text-lg flex gap-3 items-center"
                >
                  <p className="capitalize">pricing</p>
                </Link>
              </div>
              <div className="text-lg flex gap-3 items-center">
                <Link href={"#"} className="text-lg flex gap-3 items-center">
                  <p className="capitalize">Term & Condition</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <p className="capitalize text-xl font-semibold">find us on</p>
            <div className="flex gap-5">
              <Link href={"https://www.facebook.com"} target="_blank">
                <Image src={Facebook} width={48} height={48} alt="Facebook" />
              </Link>
              <Link href={"https://www.twitter.com"} target="_blank">
                <Image src={Twitter} width={48} height={48} alt="Twitter" />
              </Link>
              <Link href={"https://www.instagram.com"} target="_blank">
                <Image src={Instagram} width={48} height={48} alt="Instagram" />
              </Link>
              <Link href={"https://www.linkedin.com"} target="_blank">
                <Image src={LinkedIn} width={48} height={48} alt="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mx-8 mt-32">
          <Image src={CopyRight} width={24} height={24} alt="copy right" />
          <p className="Capitalize text-lg text-white">
            2023 PT Grow Teknologi. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
