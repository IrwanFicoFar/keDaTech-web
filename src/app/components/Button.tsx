"use client";
import Link from "next/link";
import React from "react";

export const ButtonForget = () => {
  return (
    <div className="flex justify-end">
      <button onClick={() => alert("Forget Password action")}>
        <p>Forget Password ?</p>
      </button>
    </div>
  );
};

export const ButtonLoggin = () => {
  return (
    <Link href={"/"} className="w-full">
      <div className="py-4 px-5 text-center rounded-2xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white">
        <p className="uppercase text-xl font-semibold">login</p>
      </div>
    </Link>
  );
};
