import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import { ModelCanvas } from "@/components/canvas/MainModel";
import profilePic from "../../public/images/profile/model1.png";
import AnimatedText from "@/components/canvas/AnimatedText";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quynh Nguyen</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Quynh" className="w-full h-auto" />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center mb-20">
              <AnimatedText
                text="Hi! I'm Quynh          I'm a web designer"
                className="!text-6xl !text-left dark:text-light"
              />
              <p className="my-4 text-base font-medium dark:text-light">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="flex items-center self-start mt-2 mb-20">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-full text-lg font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark 
                  hover:shadow-custom transition ease-in-out duration-300 
                  dark:border-2 dark:border-transparent dark:bg-darkModeBg hover:dark:shadow-customDarkBefore
                  hover:dark:border-2 hover:dark:border-darkModeHover dark:hover:text-darkModeHover"
                  download={true}
                >
                  Resume <IoMdDownload className={"w-6 ml-1"} />
                </Link>

                <Link
                  href="mailto:quynhhla2@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-semibold capitalize text-dark rounded-full
                  border border-solid border-dark/20 bg-light p-2.5 px-6 hover:shadow-custom1 
                  hover:border-none transition ease-in-out duration-300 dark:bg-transparent 
                  dark:text-light dark:border-2 dark:border-transparent
                  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
