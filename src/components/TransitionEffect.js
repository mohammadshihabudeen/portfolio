import React from "react";
import { motion } from "framer-motion";
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", w: "100%" }}
        animate={{ x: "0%", w: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{x:["0%","100%"],width:["0%","100%"]}}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary dark:bg-primaryDark"
      />
      <motion.div
        initial={{ x: "100%", w: "100%" }}
        animate={{ x: "0%", w: "0%" }}
        transition={{delay:0.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light"
      />
      <motion.div
        initial={{ x: "100%", w: "100%" }}
        animate={{ x: "0%", w: "0%" }}
        transition={{delay:0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark"
      />
    </>
  );
};

export default TransitionEffect;
