import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useScroll } from "@react-three/drei";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} bg-light px-6 py-3 rounded-full transition 
      ease-in-out duration-300 hover:shadow-custom 
      ${router.asPath === href ? "shadow-custom" : "shadow-none"}`}
      style={{ color: "#4c5773" }}
    >
      {title}
    </Link>
  );
};

const SocialLink = ({ href, children }) => (
  <motion.a
    href={href}
    style={{
      padding: ".5rem",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#4c5773",
    }}
    className="rounded-full bg-dark"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      backgroundColor: "#ecf0f3",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#4c5773",
      color: "#4c5773",
      boxShadow: "1rem 1rem 1rem #d3dae7, -1rem -1rem 1rem #fff",
    }}
  >
    {children}
  </motion.a>
);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] top-3 translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="items-center gap-5 text-2xl text-light flex">
        <SocialLink href="https://facebook.com">
          <TiSocialFacebook />
        </SocialLink>
        <SocialLink href="https://twitter.com">
          <TiSocialTwitter />
        </SocialLink>
        <SocialLink href="https://linkedin.com">
          <TiSocialLinkedin />
        </SocialLink>
        <SocialLink href="https://upwork.com">
          <SiUpwork />
        </SocialLink>
        <SocialLink href="https://github.com">
          <FaGithub />
        </SocialLink>

        {/* <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-10 flex items-center justify-center rounded-full p-1 bg-light shadow-custom"
          style={{
            padding: ".5rem",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#ecf0f3",
          }}
        >
          {mode === "dark" ? (
            <MdSunny className={"fill-dark"} />
          ) : (
            <IoMdMoon className={"fill-dark"} />
          )}
        </button> */}
      </nav>
    </header>
  );
};

export default NavBar;
