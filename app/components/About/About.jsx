"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const imgVariants = {
  initial: {
    y: 20,
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

const textVariants = {
  initial: {
    x: -100,
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

const div1 = {
  initial: {
    x: -20,
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
const div2 = {
  initial: {
    x: 20,
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
const div3 = {
  initial: {
    y: -20,
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
const div4 = {
  initial: {
    y: 20,
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
const About = () => {
  return (
    <section
      className="bg-[#050816] md:px-5 px-0 min-h-screen flex flex-col justify-end z-50"
      id="about"
    >
      <fieldset className="md:h-[80vh] text-white  md:px-6 px-2 mb-6">
        <legend className="bg-blue-500  text-center text-2xl font-bold text-white px-4 rounded-md">
          About Me
        </legend>
        <div className="max-w-full  md:mx-auto 2xl:h-[60vh] sm:h-auto p-0 rounded-md shadow-lg mt-3 text-black overflow-hidden xl:flex 2xl:flex lg:flex md:flex justify-center">
          <div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className="flex-shrink-0 ml-1 w-[400px] xl:w-[500px] 2xl:w-[600px] mt-2 xl:ml-6 sm:ml-32 md:ml-10 lg:ml-12 mb-3 sm:mt-8 md:h-[400px] sm:w-[350px] sm:h-[200px] overflow-hidden "
          >
            <div className="flex gap-10">
              {/* <motion.div
                variants={div1}
                initial="initial"
                whileInView="animate"
                className=""
              >
                <Image
                  src="/khan.jpg" // Adjust the path based on your project structure
                  alt="about"
                  className="md:ml-8 sm:ml-0 h-32 object-fit hover:scale-105"
                  width={130} // Set your desired width
                  height={130} // Set your desired height
                />
              </motion.div> */}
              <motion.div
                variants={div2}
                initial="initial"
                whileInView="animate"
              >
                <Image
                  src="/fahad6.jpg" // Adjust the path based on your project structure
                  alt="about"
                  className="md:ml-8 "
                  width={450} // Set your desired width
                  height={550} // Set your desired height
                />
              </motion.div>
            </div>
            {/* <div className="flex mt-10 gap-10">
              <motion.div
                variants={div3}
                initial="initial"
                whileInView="animate"
              >
                <Image
                  src="/fahad2.jpg" // Adjust the path based on your project structure
                  alt="about"
                  className="md:ml-8 sm:ml-0 object-fit"
                  width={130} // Set your desired width
                  height={140} // Set your desired height
                />
              </motion.div>
              <motion.div
                variants={div4}
                initial="initial"
                whileInView="animate"
              >
                <Image
                  src="/fahad3.jpg" // Adjust the path based on your project structure
                  alt="about"
                  className="md:ml-8 sm:ml-0 object-fit"
                  width={200} // Set your desired width
                  height={200} // Set your desired height
                />
              </motion.div>
            </div> */}
          </div>
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="w-[400px] ml-1 sm:w-[620px] md:w-[400px] lg:w-[550px] xl:w-[600px] 2xl:w-[800px] h-auto xl:h-[600px]  pl-2 xl:mt-2"
          >
            <motion.div
              variants={textVariants}
              whileInView="animate"
              className="text-white duration-100 text-justify"
            >
              <p className="text-[14px] sm:text-[13px] md:text-[14] lg:text-[16px] xl:text-[17px] 2xl:text-[23px]">
                I'm a Junior Full-Stack Developer passionate about building modern, scalable, and user-friendly web applications. I previously worked as a Junior Frontend Developer at ConnectAuz, where I developed responsive web applications using Angular and GraphQL. Before that, I worked as a Frontend Developer at PI Alpha Lab and completed my internship at Genex Infosys Limited, gaining hands-on experience in real-world software development and industry best practices.

I hold a B.Sc. in Computer Science and Engineering from American International University-Bangladesh (AIUB). My technical expertise includes JavaScript, TypeScript, React.js, Next.js, Angular, Node.js, NestJS, GraphQL, Python, MongoDB, SQL, REST APIs, Tailwind CSS, Git, and GitHub.

I'm currently seeking a Full-Stack Developer or Frontend Developer opportunity where I can apply my skills, contribute to meaningful projects, and continue growing as a software engineer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </fieldset>
    </section>
  );
};

export default About;
