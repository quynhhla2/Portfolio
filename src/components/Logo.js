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
        rounded-full text-2xl font-bold transition ease-in-out duration-300"
        whileHover={{
          backgroundColor: "#ecf0f3",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#4c5773",
          color: "#4c5773",
          boxShadow: "1rem 1rem 1rem #d3dae7, -1rem -1rem 1rem #fff",
        }}
        transition={{ duration: 0, ease: "easeInOut" }}
      >
        QM
      </MotionLink>
    </div>
  );
};

export default Logo;
