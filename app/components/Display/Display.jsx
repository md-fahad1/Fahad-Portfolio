"use client";
import { motion } from "framer-motion";
import Works from "../Works/Works";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useRef } from "react";

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 4,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const textVariants1 = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const textVariants2 = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "4%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};
const sliderVariants1 = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-4%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};

const Display = () => {
  const [textIndex, setTextIndex] = useState(0);
  const strings = useMemo(
    () => ["  Youtuber", "  Front-End-Developer", "  Frelancer"],
    []
  );
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedText(strings[textIndex].substring(0, typedText.length + 1));
    }, 100);

    return () => clearInterval(intervalId);
  }, [textIndex, typedText, strings]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextIndex((textIndex + 1) % strings.length);
      setTypedText("");
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, [textIndex, strings]);

  const projectSectionRef = useRef(null);

  const scrollToProjects = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="w-full min-h-[calc(100vh-800px)]  flex justify-between bg-[#041e42] sm:min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-400px)] xl:min-h-[calc(100vh-80px)] 2xl:min-h-[calc(100vh-700px)] bg-cover bg-center items-center"
      id="home"
      style={{
        // Gradient from top to bottom
        background:
          "radial-gradient(circle at center top, #041e42 1%, #050816 50%)",
      }}
    >
      <motion.div
        className=" w-full mt-10 hidden md:block "
        variants={sliderVariants}
        initial="initial"
        whileInView="animate"
      >
        <Image
          src="/upwork.png" // Adjust the path based on your project structure
          alt="about"
          className="w-16 h-16 rounded-full ml-3 opacity-50    animate-glow-border"
          width={16} // Set your desired width
          height={16} // Set your desired height
        />

        <div className="animate-glow-border w-16 h-16 opacity-50  rounded-full ml-auto mr-5 mt-10 ">
          <Image
            src="/Facebook.png" // Adjust the path based on your project structure
            alt="about"
            className="  w-20 h-16 top-5 "
            width={16} // Set your desired width
            height={16} // Set your desired height
          />
        </div>
        <Image
          src="/github.png" // Adjust the path based on your project structure
          alt="about"
          className="w-16 h-16 rounded-full mt-10 ml-3 opacity-50   animate-glow-border"
          width={24} // Set your desired width
          height={24} // Set your desired height
        />
        <div className="animate-glow-border w-16 h-16 rounded-full opacity-50  ml-auto mr-5 mt-10 ">
          <Image
            src="/bootstrap.png" // Adjust the path based on your project structure
            alt="about"
            className="  w-20 h-20 top-5 "
            width={16} // Set your desired width
            height={16} // Set your desired height
          />
        </div>
      </motion.div>
      <div className="item-center w-full justify-center">
        <div className="flex justify-center flex-col items-center mt-10 ">
          <motion.div
            className="relative  rounded-full md:h-40 md:w-40 w-20 h-20 mt-4 md:mt-0"
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
          >
            <Image
              src="/fahad.png" // Adjust the path based on your project structure
              alt="about"
              className="w-full h-full rounded-full shadow-md"
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
            <svg className="absolute inset-0 w-full h-full">
              {/* Inner circle for the image border */}
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                className="stroke-current stroke-2 text-blue-500 rounded-full shadow-blue-500 animate-glow-border"
                fill="none"
              />
              {/* Outer circle for additional glow */}
              <circle
                cx="50%"
                cy="50%"
                r="55%"
                className="stroke-current stroke-2 text-blue-500 rounded-full shadow-blue-500 animate-glow-border"
                fill="none"
              />
            </svg>
          </motion.div>
        </div>
        <div className="flex flex-col w-full mb-16  items-center justify-center">
          <motion.div>
            <div class="flex  w-full items-center justify-center ">
              <h1 class="relative top-0 w-fit h-auto  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl mt-4 md:mt-0 md:text-5xl font-bold text-transparent text-center select-auto">
                Hi, I'm {typedText}
              </h1>
            </div>
          </motion.div>

          <motion.div
            variants={textVariants1}
            initial="initial"
            whileInView="animate"
            className="duration-400  mt-3 text-white w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] xl:w-[750px] 2xl:w-[850px] text-[8px] sm:text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] text-center"
          >
            I love to Develop user interfaces and web applications with latest
            technologies. Transforming ideas into reality through code.
          </motion.div>

          <motion.div
            className="flex gap-2 text-white mt-4"
            variants={textVariants2}
            initial="initial"
            whileInView="animate"
          >
            <a
              href="#contact"
              className="bg-[#3DB0E1] text-sm md:text-xl hover:bg-[#2881a7] px-5 py-1"
            >
              HIRE ME
            </a>
            <a
              href="#projects"
              className="relative px-5 py-1 border-2 border-transparent hover:animate-glow-border"
            >
              <svg className="absolute inset-0 w-full h-full">
                <rect
                  x="1"
                  y="1"
                  width="calc(100% - 2px)"
                  height="calc(100% - 2px)"
                  className="stroke-current  stroke-2 hover:stroke-0  animate-glow-border-line text-[#3DB0E1] "
                  fill="none"
                  strokeDasharray="100%"
                />
              </svg>
              <span className="relative z-10">MY WORK</span>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        className=" w-full mt-2 hidden md:block "
        variants={sliderVariants1}
        initial="initial"
        whileInView="animate"
      >
        <Image
          src="/react.png" // Adjust the path based on your project structure
          alt="about"
          className="w-16 h-16 rounded-full opacity-50 ml-2   animate-glow-border"
          width={16} // Set your desired width
          height={16} // Set your desired height
        />

        <div className="animate-glow-border w-16 h-16 opacity-50  rounded-full ml-auto mr-5 mt-10 ">
          <Image
            src="/tailwind.png" // Adjust the path based on your project structure
            alt="about"
            className="  w-20 h-16 top-5  "
            width={16} // Set your desired width
            height={16} // Set your desired height
          />
        </div>
        <Image
          src="/nestjs.webp" // Adjust the path based on your project structure
          alt="about"
          className="w-16 h-16 rounded-full mt-10 opacity-50 ml-2    animate-glow-border"
          width={24} // Set your desired width
          height={24} // Set your desired height
        />
        <div className="animate-glow-border w-16 h-16 opacity-50  rounded-full ml-auto mr-5 mt-10 ">
          <Image
            src="/Asp.png" // Adjust the path based on your project structure
            alt="about"
            className="  w-20 h-20 top-5 "
            width={16} // Set your desired width
            height={16} // Set your desired height
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Display;
