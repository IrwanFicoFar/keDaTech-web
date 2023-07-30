"use client";

import { Transition, Menu } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Burger from "../../../public/Stat@3x.png";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="hidden md:px-16 xl:px-24 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-24 md:flex md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-24 lg:text-lg xl:text-xl font-bold items-center">
          <Link
            href={"#about"}
            className="uppercase hover:scale-105 hover:text-cyan-400 duration-300"
          >
            about
          </Link>
          <Link
            href={"#pricing"}
            className="uppercase hover:scale-105 hover:text-cyan-400 duration-300"
          >
            pricing
          </Link>
          <Link
            href={"#contact"}
            className="uppercase hover:scale-105 hover:text-cyan-400 duration-300"
          >
            contact
          </Link>
          <Link href={"/login"} className="uppercase">
            <div className="border-2 border-cyan-400 text-cyan-400 py-2 md:px-6 lg:px-8 xl:px-12 2xl:px-14 rounded-xl hover:scale-105 duration-300 hover:bg-cyan-400 hover:text-white">
              login
            </div>
          </Link>
        </div>
        <div className="md:hidden px-10 sm:px-16 pt-10">
          <button onClick={() => setShow(true)}>
            <Image
              src={Burger}
              width={36}
              height={32}
              alt="burger button"
              className="-rotate-90 active:scale-105"
            />
          </button>
        </div>
      </div>
      <>
        <Transition
          show={show}
          enter="transition duration-300 ease-out transform"
          enterFrom="opacity-0 -translate-y-96"
          enterTo="opacity-100 -translate-y-24"
          leave="transition duration-300 ease-in transform"
          leaveFrom="opacity-100 -translate-y-24"
          leaveTo="opacity-0 -translate-y-96"
        >
          <Menu as="div" className={"absolute top-0 z-50 w-full"}>
            <Menu.Item as="section">
              <Logo />
              <div className="bg-white drop-shadow-md rounded-b-2xl p-10">
                <div className="flex justify-end">
                  <button onClick={() => setShow(false)}>
                    <p className="bg-cyan-700 text-white font-bold px-4 py-2 rounded-full">
                      X
                    </p>
                  </button>
                </div>
                <div className="flex flex-col gap-5 font-semibold">
                  <Link
                    href={"#about"}
                    className="uppercase active:scale-105 active:text-cyan-400 duration-300"
                  >
                    about
                  </Link>
                  <Link
                    href={"#pricing"}
                    className="uppercase hover:scale-105 hover:text-cyan-400 duration-300"
                  >
                    pricing
                  </Link>
                  <Link
                    href={"#contact"}
                    className="uppercase hover:scale-105 hover:text-cyan-400 duration-300"
                  >
                    contact
                  </Link>
                  <Link href={"/login"} className="uppercase w-32">
                    <div className=" flex justify-center border-2 border-cyan-400 text-cyan-400 py-2 rounded-xl hover:scale-105 duration-300 hover:bg-cyan-400 hover:text-white">
                      login
                    </div>
                  </Link>
                </div>
              </div>
            </Menu.Item>
          </Menu>
        </Transition>
      </>
    </>
  );
};
