"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FcDownload } from "react-icons/fc";
import "./Education.css";

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
const textVariant1 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  return (
    <section
      className="bg-[#050816]  md:px-5 px-1 min-h-[70vh]  flex flex-col justify-end"
      id="about"
      style={{
        // Gradient from top to bottom
        background:
          "radial-gradient(circle at center top, #041e42 1%, #050816 50%)",
      }}
    >
      <fieldset className=" text-white mx-auto  md:px-6 px-2 md:mt-5 mt-4   mb-6">
        <legend className="bg-blue-500 mb-6  text-center text-2xl font-bold text-white px-4 rounded-md">
          Education
        </legend>
        <div className="  content-center max-w-7xl   p-0 rounded-md shadow-lg mt-8 text-black overflow-hidden xl:flex 2xl:flex lg:flex md:flex justify-center gap-8 ">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className=" w-[350px] sm:w-[620px] md:w-[400px] lg:w-[550px] xl:w-[600px] 2xl:w-[800px] h-auto xl:h-[600px] md:ml-[30px] pl-2 xl:mt-2"
          >
            <Image
              src="/education.gif" // Adjust the path based on your project structure
              alt="about"
              className=" sm:ml-0 h-[420px] w-[500px] object-fit "
              width={600} // Set your desired width
              height={600} // Set your desired height
            />
          </motion.div>
          <motion.div
            className="w-1/2 h-full flex flex-col gap-5  md:ml-10 ml-5 mb-3 mt-5 md:mt-1"
            variants={textVariant1}
            initial="initial"
            whileInView="animate"
          >
            <div class="card1 px-2 md:px-0 w-[300px] ml-5 md:ml-0 md:w-[500px] h-[60px] md:h-[125px] animate-glow-border hover:ml-5 md:hover:ml-0">
              <div class="border"></div>
              <div class="content1 ">
                <div class="logo w-[300px] md:w-[400px] md:hover:w-[400px] ">
                  <div class="logo1 w-[300px] md:w-[400px] md:text-[40px] text-[20px]">
                    <div className="text-[12px]  md:text-[18px] font-bold text-white ">
                      B.Sc. in Computer Science & Engineering (CSE)
                    </div>
                  </div>

                  <span class="trail md:w-[200px] w-[100px]"></span>
                </div>
                <span class="logo-bottom-text  md:w-[400px] md:text-[16px] text-[11px] font-bold w-[250px] md:ml-[10px] ml-0 ">
                  American International University-Bangladesh
                </span>
              </div>
              <span class="bottom-text  md:text-2xl md:hover:text-[20px] text-[10px] ">
                2020-2023
              </span>
            </div>

            <div class="card1 px-2 hover:text-center md:px-0 w-[300px] ml-5 md:ml-0 md:w-[500px] h-[60px] md:h-[125px] animate-glow-border hover:ml-5 md:hover:ml-0">
              <div class="border"></div>
              <div class="content1 ">
                <div class="logo w-[300px] md:w-[400px] md:hover:w-[400px] ">
                  <div class="logo1 w-[300px] md:w-[400px] md:text-[40px] text-[20px]">
                    <div className="text-[12px] mr-16 hover:mr-0  md:text-[18px] font-bold text-white transition-all duration-200 ">
                      HSC - Higher Secondary Certificate
                    </div>
                  </div>

                  <span class="trail md:w-[200px] w-[100px]"></span>
                </div>
                <span class="logo-bottom-text text-center  md:w-[400px] md:text-[16px] text-[11px] font-bold w-[250px] md:ml-[10px] ml-0 ">
                  Shahid Presedent Ziaur Rahman Collage
                </span>
              </div>
              <span class="bottom-text  md:text-2xl md:hover:text-[20px] text-[10px] ">
                2017-2019
              </span>
            </div>
            <div class="card1 px-2 hover:text-center md:px-0 w-[300px] ml-5 md:ml-0 md:w-[500px] h-[60px] md:h-[125px] animate-glow-border hover:ml-5 md:hover:ml-0">
              <div class="border"></div>
              <div class="content1">
                <div class="logo w-[300px] md:w-[400px] md:hover:w-[400px] ">
                  <div class="logo1 w-[300px] md:w-[400px] md:text-[40px] text-[20px]">
                    <div className="text-[12px]  mr-16 hover:mr-0   md:text-[19px] font-bold text-white ">
                      SSC - Secondary School Certificate
                    </div>
                  </div>

                  <span class="trail md:w-[200px] w-[100px]"></span>
                </div>
                <span class="logo-bottom-text   md:w-[400px] md:text-[16px] text-[11px] font-bold w-[250px] md:ml-[10px]  ">
                  Shantipur Adarsha High School
                </span>
              </div>
              <span class="bottom-text  md:text-2xl md:hover:text-[20px] text-[10px] ">
                2012-2017
              </span>
            </div>
          </motion.div>
        </div>
      </fieldset>
    </section>
  );
};

export default Education;
