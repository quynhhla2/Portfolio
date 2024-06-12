import React from "react";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold transition ease-in-out duration-300
        hover:bg-light hover:border-dark hover:text-dark hover:shadow-custom
        border border-solid border-transparent dark:border-2 dark:border-darkModeHover
        dark:bg-darkModeBg dark:text-darkModeHover hover:dark:shadow-customDarkBefore 
        hover:dark:bg-darkModeHover hover:dark:text-darkModeBg 
        dark:transition dark:duration-500 dark:ease-in-out"
      >
        QM
      </MotionLink>
    </div>
  );
};

export default Logo;
