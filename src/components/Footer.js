import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    // <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">

    <footer className="flex">
      <Layout className="py-8 flex w-full  border-t-2 border-solid border-dark items-center justify-between lg:flex-col lg:py-8 font-medium text-lg dark:text-light dark:border-light sm:text-base">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <spn className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;{" "}
          </spn>
          by&nbsp;
          <Link
            href={"https://www.linkedin.com/in/mohammadshihabudeen/"}
            className="underline underline-offset-2"
            target="_blank"
          >
            Shihabudeen
          </Link>
        </div>
        <Link
          href={"mailto:city.shihabudeen@gmail.com"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
