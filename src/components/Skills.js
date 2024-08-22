import React, { Suspense, useEffect, useMemo,useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { javascript, typescript, html, css, reactjs, tailwind, nodejs, postgresql, python, nextjs, expressjs } from "./skillAssets";
// Loader Component
const Loader = () => {
  const { progress } = useProgress();
  return (
    <div center className="flex flex-col items-center">
      <span className="canvas-loader"></span>
      <p className="text-xs font-semibold mt-10 text-light">{progress.toFixed(2)}%</p>
    </div>
  );
};

// Skill Component
const Skill = ({ name, x, y, icon }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { x, y, opacity: 1 } : {}}
      transition={{ duration: 1.5 }}
      className="absolute flex flex-col items-center"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="border border-light-2 relative cursor-pointer bg-dark flex items-center justify-center rounded-full"
        style={{
          width: "5vw",
          height: "5vw",
          maxWidth: "80px",
          maxHeight: "80px",
          minWidth: "40px",
          minHeight: "40px",
        }}
      >
        {isClient ? (
          <Suspense fallback={<Loader />}>
            <Image
              src={icon}
              fill
              objectFit="contain"
              sizes="(min-width: 1200px) 80px, (min-width: 768px) 60px, 50px"
              alt={`${name} icon`}
              className="p-2"
            />
          </Suspense>
        ) : null}
        <p className="md:hidden absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs font-semibold text-dark dark:text-light pointer-events-none">
          {name}
        </p>
      </motion.div>
    </motion.div>
  );
}

const Skills = () => {
  const skills = useMemo(() => [
    { name: "HTML", x: "-20vw", y: "4vw", icon: html },
    { name: "CSS", x: "-7vw", y: "-14vw", icon: css },
    { name: "Javascript", x: "20vw", y: "6vw", icon: javascript },
    { name: "ReactJs", x: "0vw", y: "14vw", icon: reactjs },
    { name: "NextJs", x: "-20vw", y: "-17vw", icon: nextjs },
    { name: "NodeJs", x: "15vw", y: "-10vw", icon: nodejs },
    { name: "ExpressJs", x: "-30vw", y: "-7vw", icon: expressjs },
    { name: "TailwindCss", x: "5vw", y: "-20vw", icon: tailwind },
    { name: "Python", x: "-25vw", y: "16vw", icon: python },
    { name: "PostgresSql", x: "18vw", y: "18vw", icon: postgresql },
    { name: "TypeScript", x: "35vw", y: "9vw", icon: typescript },
  ], []);

  return (
    <>
      <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl sm:text-4xl my-16">
        Skills
      </h2>
      <div className="relative flex items-center justify-center w-full h-[90vh] lg:j-[60vh] md:h-[40vh] sm:h-[30vh] rounded-full bg-circularLight dark:bg-circularDark 
        lg:bg-circularLightLg dark:lg:bg-circularDarkLg
        md:bg-circularLightMd dark:md:bg-circularDarkMd
        sm:bg-circularLightSm dark:sm:bg-circularDarkSm
      ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-5 sm:p-4 xs:p-3"
        >
          Web
        </motion.div>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
