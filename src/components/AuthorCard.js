import React from "react";
import { useRef, useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/canvas/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import aboutpic from "../../public/images/profile/aboutme1.jpg";
import { MdVerified } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/ti";

const AuthorCard = () => {

  return (
    <div className="w-full z-50 mt-0">
      <div
        className="w-full mx-auto grid grid-cols-1fr md:grid-cols-1fr-4fr-1.3fr 
        items-center bg-light py-8 px-8 rounded-lg shadow-custom
        gap-12"
      >
        <div className="flex items-center">
          {" "}
          {/* Added this div */}
          <div>
            <Image
              src={aboutpic}
              className="rounded-lg"
              alt="aboutme"
              width={320}
              height={320}
            />
          </div>
          <div className="px-10">
            <h2 className="mb-6 flex items-center justify-start text-4xl leading-none mt-neg-2.5 text-dark font-bold">
              Nguyễn Thúy Quỳnh{""}{" "}
              <span className="px-3">
                <MdVerified />
              </span>{" "}
            </h2>

            <div className="mt-[-1rem] mb-3">
              <p className="mr-4 text-dark/70 outline-none bg-transparent border-none text-sm w-35">
                quynhnguyen.mattech@gmail.com
              </p>
            </div>

            <p className="text-dark/85 outline-none bg-transparent border-none text-base w-35 mb-3">
              Hi, I'm Quynh Nguyen, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 3 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>

            <div className="flex items-center gap-4 text-lg">
              <a
                href="#"
                className="bg-dark text-light rounded-full grid 
                place-items-center p-2 border border-icons-color 
                transition-all duration-300 cursor-pointer 
                hover:shadow-custom hover:bg-light hover:border-dark 
                hover:text-dark"
              >
                <TiSocialFacebook />
              </a>

              <a
                href="#"
                className="bg-dark text-light rounded-full grid 
                place-items-center p-2 border border-icons-color 
                transition-all duration-300 cursor-pointer 
                hover:shadow-custom hover:bg-light hover:border-dark 
                hover:text-dark"
              >
                <TiSocialLinkedin />
              </a>

              <a
                href="#"
                className="bg-dark text-light rounded-full grid 
                place-items-center p-2 border border-icons-color 
                transition-all duration-300 cursor-pointer 
                hover:shadow-custom hover:bg-light hover:border-dark 
                hover:text-dark"
              >
                <TiSocialTwitter />
              </a>

              <a
                href="#"
                className="bg-dark text-light rounded-full grid 
                place-items-center p-2 border border-icons-color 
                transition-all duration-300 cursor-pointer 
                hover:shadow-custom hover:bg-light hover:border-dark 
                hover:text-dark"
              >
                <TiSocialInstagram />
              </a>
            </div>
          </div>
        </div>{" "}
        {/* Added this div */}
      </div>
    </div>
  );
};

export default AuthorCard;
