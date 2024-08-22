import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
import MealsApp from "../../public/images/projects/MealsApp.png";
import UserManagement from "../../public/images/projects/UserManagement.png";
import SivaProject from "../../public/images/projects/SivaProject.png";
import WeatherProject from "../../public/images/projects/WeatherProject.png";
import GoalManagement from "../../public/images/projects/GoalManagement.png";
import GuessNumber from "../../public/images/projects/GuessNumber.png";

import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light dark:shadow-light/25
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium  text-2xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon className={"dark:fill-light"} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit The Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link, github }) => {
  return (
    <article className=" w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl dark:bg-dark dark:border-light dark:shadow-light/25 xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem] " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium  text-2xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-sm">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={"dark:fill-light"} />
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  return (
    <>
      <Head>
        <title>Shihab | Projects </title>
        <meta name="description" content="Projects page in Portfolio site of mohammad shihabudeen" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16 dark:text-light lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Meals  Application"}
                summary={`Discover the Meals Application, a comprehensive platform designed to simplify meal planning and preparation. Built with React Native, Context API, and React Router, this feature-rich app provides users with detailed meal information, including ingredients and step-by-step cooking instructions`}
                link={"https://github.com/mohammadshihabudeen/Meals-App"}
                type={"Featured Project"}
                img={MealsApp}
                github={"https://github.com/mohammadshihabudeen/Meals-App"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"User Management system"}
                link={"https://github.com/mohammadshihabudeen/profile-dashboard"}
                type={"Featured Project"}
                img={UserManagement}
                github={"https://github.com/mohammadshihabudeen/profile-dashboard"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Goal Management Application"}
                link={"https://github.com/mohammadshihabudeen/Goal-List--Mobile-App"}
                type={"Featured Project"}
                img={GoalManagement}
                github={"https://github.com/mohammadshihabudeen/Goal-List--Mobile-App"}
              />
            </div>{" "}
            <div className="col-span-12">
              <FeaturedProject
                title={"Siva Electronics And Furnitures"}
                summary={`Explore the Siva Electronics and Furnitures web application, designed to showcase a diverse range of products from an electronic shop located in Gudimangalam. Built  With a focus on delivering an engaging shopping experience, users can easily navigate through product categories and discover various electronics and furniture items`}
                link={"https://github.com/mohammadshihabudeen/sivaelectronics-project"}
                type={"Featured Project"}
                img={SivaProject}
                github={"https://github.com/mohammadshihabudeen/sivaelectronics-project"}
              />
            </div>{" "}
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Guess Number Application"}
                link={"https://github.com/mohammadshihabudeen/Mini_Game"}
                type={"Featured Project"}
                img={GuessNumber}
                github={"https://github.com/mohammadshihabudeen/Mini_Game"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Weather Forcasting Web Application"}
                link={"https://github.com/mohammadshihabudeen/weather-webapp"}
                type={"Featured Project"}
                img={WeatherProject}
                github={"https://github.com/mohammadshihabudeen/weather-webapp"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
