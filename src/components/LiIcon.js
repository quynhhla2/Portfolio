import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { ScrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  console.log(reference);

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
          style={{
            pathLength: ScrollYProgress
          }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary" />
      </svg>
    </figure>
  );
};

export default LiIcon;
