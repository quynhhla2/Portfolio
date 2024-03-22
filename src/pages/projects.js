import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/canvas/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
      rounded-3xl shadow-custom bg-light p-12"
    >
      {link && (
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-xl"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
      )}

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        {link && (
          <Link href={link} target="_blank" className="">
            <h2
              className="my-2 w-full text-left text-4xl font-bold text-dark 
            hover:text-dark/75 transition ease-in-out duration-300"
            >
              {title}
            </h2>
          </Link>
        )}
        <p className="my-2 font-medium text-dark/80">{summary}</p>
        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank">
              <FaGithub style={{ fontSize: "40px", color: "#4c5773" }} />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-full bg-dark text-light p-2 
              px-6 text-lg font-semibold border hover:border-dark hover:bg-light
              hover:shadow-custom hover:text-dark transition ease-in-out
              duration-300"
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center 
    rounded-2xl hover:shadow-custom transition ease-in-out duration-300 
    border border-dark/20 hover:border-none bg-light p-6 relative">
      {link && (
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-xl"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
      )}

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        {link && (
          <Link href={link} target="_blank" className="">
            <h2
              className="my-2 w-full text-left text-xl font-bold text-dark 
            hover:text-dark/75 transition ease-in-out duration-300"
            >
              {title}
            </h2>
          </Link>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="rounded-full bg-light text-dark p-2 px-6 
              text-lg font-semibold border border-dark/20 hover:border-none hover:shadow-custom 
              transition ease-in-out duration-300"
            >
              Visit
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank">
              <FaGithub style={{ fontSize: "28px", color:"#4c5773" }} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Quynh Nguyen | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-20"
          />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProjects
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
