import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogoIcon } from "./Icons";

const Logo = () => {
    const MotionLink = motion(Link)
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={"/"}
        className="w-16 h-16 bg-dark border border-solid border-transparent dark:border-light text-light flex justify-center items-center rounded-full text-2xl font-bold"
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1,repeat:Infinity}
        }}
      >
        <LogoIcon className={"m-1.5 scale-110"}/>
      </MotionLink>
    </div>
  );
};

export default Logo;
