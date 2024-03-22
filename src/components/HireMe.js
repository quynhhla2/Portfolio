import React from "react";
import SvgComponent from "./svg";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 top-4 flex items-center justify-center 
      overflow-hidden"
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <SvgComponent className={"fill-dark animate-spin-slow"} />

        <Link
          href="mailto:quynhhla2@gmail.com"
          className="flex items-center justify-center absolute left-1/2 
          top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
          shadow-xl border border-solid border-dark w-20 h-20 rounded-full
          font-bold hover:bg-light hover:text-dark transition ease-in-out
          duration-300"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
