import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Logo />
      </div>
      <div className="px-32 pt-24 flex gap-24 text-xl font-bold items-center">
        <Link href={"#about"} className="uppercase">
          about
        </Link>
        <Link href={"#pricing"} className="uppercase">
          pricing
        </Link>
        <Link href={"#contact"} className="uppercase">
          contact
        </Link>
        <Link href={"#/login"} className="uppercase">
          <div className="border-2 border-cyan-400 text-cyan-400 py-2 px-14 rounded-xl hover:scale-105 duration-300 hover:bg-cyan-400 hover:text-white">
            login
          </div>
        </Link>
      </div>
    </div>
  );
};
