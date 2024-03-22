import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-transparent
    shadow-custom font-medium text-lg text-dark"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with{" "}
          <span className="text-red-800 text-2xl px-1">
            <IoIosHeart />
          </span>
          by &nbsp;
          <Link href="/" className="p-2.5 px-5 rounded-full shadow-custom2">
            Quynh Nguyen
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="p-2.5 rounded-full px-6 shadow-custom"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
