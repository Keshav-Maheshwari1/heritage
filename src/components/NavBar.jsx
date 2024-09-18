"use client";
import React, { useRef } from "react";

const NavBar = () => {
  return (
    <nav className="p-4 bg-[#eeeeee6c]  px-10 h-full w-full flex justify-between">
      <div className="flex flex-col space-y-1  h-full">
        <span className="w-8 h-1 bg-black" />
        <span className="w-8 h-1 bg-black" />
        <span className="w-8 h-1 bg-black" />
      </div>
      <p className="font-serif text-black font-bold text-xl">logo</p>
    </nav>
  );
};

export default NavBar;
