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
      className={`${className} bg-light px-6 py-3 rounded-full border-2 border-transparent
      transition ease-in-out duration-300 hover:shadow-custom text-dark 
      ${
        router.asPath === href
          ? "shadow-custom dark:shadow-customDarkBefore dark:text-darkModeHover dark:border-2 dark:border-darkModeHover"
          : "shadow-none"
      } 
      dark:bg-darkModeBg dark:text-light hover:dark:text-darkModeHover 
      hover:dark:border-2 hover:dark:border-darkModeHover 
      hover:dark:shadow-customDarkBefore dark:transition dark:duration-500 dark:ease-in-out
      `}
    >
      {title}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} bg-transparent px-6 py-3 rounded-full 
      transition ease-in-out duration-300 hover:shadow-custom3 my-2
      ${router.asPath === href ? "shadow-custom3" : "shadow-none"}`}
      style={{ color: "#ecf0f3" }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const SocialLink = ({ href, children }) => (
  <motion.a
    href={href}
    style={{
      padding: ".5rem",
    }}
    className="rounded-full border border-solid border-dark bg-dark 
    hover:bg-light hover:text-dark hover:shadow-custom
    transition duration-300 ease-in-out
    dark:bg-darkModeBg dark:border-2 dark:border-transparent
    hover:dark:border-darkModeHover hover:dark:shadow-customDarkBefore
    hover:dark:text-darkModeHover dark:transition dark:duration-500
    dark:ease-in-out"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </motion.a>
);

const SocialMobileLink = ({ href, children }) => (
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
      boxShadow:
        "1rem 1rem 1rem rgb(76, 87, 115, 0.7), -0.5rem -0.6rem 1rem rgb(255, 255, 255, 0.1)",
    }}
  >
    {children}
  </motion.a>
);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("handleClick");
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center 
      justify-between relative z-50"
    >
      <button
        className="flex-col justify-center items-center important hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink
            href="/"
            title="Home"
            className="mr-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/contact"
            title="Contact"
            className="ml-4"
            toggle={handleClick}
          />
        </nav>

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
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === "dark" ? (
              <MdSunny className={"fill-light"} />
            ) : (
              <IoMdMoon className={"fill-dark"} />
            )}
          </button> */}
        </nav>
      </div>

      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col justify-between items-center 
        fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2
        bg-dark/70 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="items-center gap-5 text-2xl text-light flex">
            <SocialMobileLink href="https://facebook.com">
              <TiSocialFacebook />
            </SocialMobileLink>
            <SocialMobileLink href="https://twitter.com">
              <TiSocialTwitter />
            </SocialMobileLink>
            <SocialMobileLink href="https://linkedin.com">
              <TiSocialLinkedin />
            </SocialMobileLink>
            <SocialMobileLink href="https://upwork.com">
              <SiUpwork />
            </SocialMobileLink>
            <SocialMobileLink href="https://github.com">
              <FaGithub />
            </SocialMobileLink>
          </nav>
        </div>
      ) : null}

      <div className="absolute left-[50%] top-3 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
