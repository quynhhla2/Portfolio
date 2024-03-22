import React from "react";
import { motion } from "framer-motion";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
            font-bold bg-dark text-light py-3 px-6 shadow-custom 
            cursor-pointer absolute"
      whileHover={{
        backgroundColor: "#ecf0f3",
        borderColor: "#4c5773",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "#4c5773",
        transition: { duration: 0.3 },
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-56 w-full text-center text-dark">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full 
            font-bold bg-dark text-light p-8 shadow-custom 
            cursor-pointer"
          whileHover={{
            backgroundColor: "#ecf0f3",
            borderColor: "#4c5773",
            borderStyle: "solid",
            borderWidth: "1px",
            color: "#4c5773",
            transition: { duration: 0.3 },
          }}
          transition={{ duration: 1.5 }}
        >
          Web
        </motion.div>

        <Skills name="HTML" x="-25vw" y="2vw" />
        <Skills name="CSS" x="-5vw" y="-10vw" />
        <Skills name="Javascript" x="20vw" y="6vw" />
        <Skills name="ReactJS" x="0vw" y="12vw" />
        <Skills name="NextJS" x="-20vw" y="-15vw" />
        <Skills name="Wix" x="15vw" y="-3vw" />
        <Skills name="Tailwind CSS" x="15vw" y="-12vw" />
        <Skills name="Wordpress" x="32vw" y="-5vw" />
        <Skills name="UX/UI Design" x="0vw" y="-20vw" />
        <Skills name="Adobe Creative Cloud" x="-32vw" y="-8vw" />
        <Skills name="Figma" x="18vw" y="18vw" />
        <Skills name="Graphic Design" x="-25vw" y="18vw" />
      </div>
    </>
  );
};

export default Skill;
