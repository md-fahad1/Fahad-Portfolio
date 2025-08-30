"use client";

import Heading from "../Navbar/Heading";
import { MdWorkHistory } from "react-icons/md";
import styles from "./styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { zoomIn, staggerContainer } from "../utils/Animation";

const Experience = () => {
  return (
    <section
      className="px-4 md:px-6 pt-10 pb-5 bg-[#050817]"
      id="experience"
      style={{
        // Gradient from top to bottom
        background:
          "radial-gradient(circle at center top, #041e42 1%, #050816 50%)",
      }}
    >
      <div className="container">
        <div className="item-center  text-center">
          <button className="bg-blue-500 items-center text-center mb-10 text-2xl font-bold text-white px-4 rounded-md">
            {" "}
            Work Experience
          </button>
        </div>

        <div className="relative pt-12">
          <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center h-full  ">
            <div className="rounded-full w-fit p-2 border-[#70e0ff] animate-glow-border border-2 cursor-pointer transition-all duration-600 text-3xl hover:text-4xl text-[#70E0FF]">
              <MdWorkHistory />
            </div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="line w-[2px] h-full bg-gradient-to-b from-[#70e0ff] to-[#F41587]"
            />
          </div>

          <motion.div
            className="flex flex-col gap-1  pb-5 px-3 "
            variants={staggerContainer(0, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* item 2 */}
            <div>
              <Tilt
                options={{
                  scale: 1,
                }}
                className="flex items-left gap-20 flex-col pl-12 md:pl-0 md:flex-row md:items-center"
              >
                <motion.div
                  className="relative rounded-lg shadow-md cursor-pointer shadow-[#70e0ff] flex flex-col gap-1 p-5 w-full md:w-1/2 items-start md:items-end md:text-right"
                  variants={zoomIn(0.3, 0.5)}
                >
                  <p className="text-[#f41587] font-bold md:hidden text-xs ">
                    Aug 2025 - Present
                  </p>
                  <h3 className="bg-gradient-to-r from-[#6CD7F6] via-teal-500 to-pink-500 bg-clip-text text-transparent font-semibold text-2xl">
                    Connect Auz
                  </h3>
                  <h4 className="text-[#6CD7F6] font-bold text-xl">
                    Junior Developer
                  </h4>
                  <p className="text-slate-300 hover:text-slate-100">
                    Building Website using most popular prgrmaing language
                    Angular.Craft seamless user interfaces and enhance user
                    experiences through innovative frontend solutions.  Exhibit
                    strong communication and teamwork skills in a remote
                    environment, consistently meeting project milestones and
                    objectives
                  </p>
                  <div className="flex items-center absolute top-1/2 rotate-180 -translate-y-1/2 w-[26px] -left-[26px] md:w-11 md:rotate-0 md:-right-11 md:left-auto">
                    <div className="h-[2px] bg-[#70E0FF] flex-1" />
                    <div className="h-3 rounded-full bg-[#70E0FF] animate-glow-border w-3" />
                  </div>
                </motion.div>

                {/* ----- */}
                <div className="hidden md:block w-1/2">
                  <p className="text-[#70e0ff] font-bold">Aug 2025 - Present</p>
                </div>
              </Tilt>
            </div>
            <div>
              <Tilt
                options={{
                  scale: 1,
                }}
                className="flex items-left gap-20 flex-col pl-11 md:pl-0 md:flex-row-reverse md:items-center"
              >
                <motion.div
                  className="relative rounded-lg shadow-md cursor-pointer shadow-[#70e0ff] flex flex-col gap-2 p-5 w-full md:w-1/2 items-start"
                  variants={zoomIn(1, 0.5)}
                >
                  <p className="text-[#f41587] md:hidden font-bold text-xs ">
                    Dec 2024 - May 2025
                  </p>
                  <h3 className="bg-gradient-to-l from-[#6CD7F6] via-teal-500 to-pink-500 bg-clip-text text-transparent font-semibold text-2xl w-full">
                    PI Alpha Lab
                  </h3>
                  <h4 className="text-[#6CD7F6] font-bold text-xl">
                    Front-End-Developer (Remote, Part-Time)
                  </h4>
                  <p className=" text-slate-300 hover:text-slate-100">
                    Drive frontend development initiatives within a
                    collaborative team, specializing in React JS.  Craft
                    seamless user interfaces and enhance user experiences
                    through innovative frontend solutions.  Exhibit strong
                    communication and teamwork skills in a remote environment,
                    consistently meeting project milestones and objectives.
                  </p>
                  <div className="flex items-center absolute top-1/2 rotate-180 -translate-y-1/2 w-[26px] -left-[26px] md:w-11 md:-left-11">
                    <div className="h-[2px] bg-[#70E0FF] flex-1" />
                    <div className="h-3 rounded-full bg-[#70E0FF] animate-glow-border w-3" />
                  </div>
                </motion.div>

                {/* ----- */}
                <div className="hidden md:flex w-1/2 justify-end">
                  <p className="text-[#70e0ff] font-bold">
                    Dec 2024 - May 2025{" "}
                  </p>
                </div>
              </Tilt>
            </div>
            <div>
              <Tilt
                options={{
                  scale: 1,
                }}
                className="flex items-left gap-20 flex-col pl-12 md:pl-0 md:flex-row md:items-center"
              >
                <motion.div
                  className="relative rounded-lg shadow-md cursor-pointer shadow-[#70e0ff] flex flex-col gap-1 p-5 w-full md:w-1/2 items-start md:items-end md:text-right"
                  variants={zoomIn(0.3, 0.5)}
                >
                  <p className="text-[#f41587] font-bold md:hidden text-xs ">
                    Sep 2023 - December 2024
                  </p>
                  <h3 className="bg-gradient-to-r from-[#6CD7F6] via-teal-500 to-pink-500 bg-clip-text text-transparent font-semibold text-2xl">
                    Genex Infosys Ltd
                  </h3>
                  <h4 className="text-[#6CD7F6] font-bold text-xl">
                    Training and Internship
                  </h4>
                  <p className="text-slate-300 hover:text-slate-100">
                    Acquired hands-on experience in the development field,
                    honing technical skills and gaining practical insights.
                    Utilized the opportunity at Genex Infosys Limited to bridge
                    the gap between academia and professional life, gaining
                    invaluable real-life experience. Participated in diverse
                    projects, contributing to the team and enhancing proficiency
                    in software development practices.
                  </p>
                  <div className="flex items-center absolute top-1/2 rotate-180 -translate-y-1/2 w-[26px] -left-[26px] md:w-11 md:rotate-0 md:-right-11 md:left-auto">
                    <div className="h-[2px] bg-[#70E0FF] flex-1" />
                    <div className="h-3 rounded-full bg-[#70E0FF] animate-glow-border w-3" />
                  </div>
                </motion.div>

                {/* ----- */}
                <div className="hidden md:block w-1/2">
                  <p className="text-[#70e0ff] font-bold">
                    Sep 2023 - December 2024
                  </p>
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
