"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    title: "Basic Portfolio",
    description:
      "This is my first basic portfolio website using html css javascript",
    languages: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-700" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-700" /> },
    ],
    imageUrl: "/basic.png",
    liveLink:
      "https://evanahmedfahad.000webhostapp.com/portfolio.html?fbclid=IwAR2NS28yEpMgCOynG-IInnfCtx8-uWN_EWlyo4TLdfsCapKJfPIMa6A35Po&mibextid=Zxz2cZ",
    githubLink: "https://github.com/mdfahad-khan/My-Profolio",
  },
  {
    title: "Portfolio V1",
    description:
      "This portfolio using React tailwind try to add some animation using framer motion",
    languages: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
    ],
    imageUrl: "/v1.png",
    liveLink: "https://fahad-portfolio-v1.vercel.app/",
    githubLink: "https://github.com/mdfahad-khan/fahad-portfolio",
  },
  {
    title: "Portfolio V2",
    description:
      "This portfolio build using Next js and tailwindCSS try to add some animation using framer motion",
    languages: [
      { name: "NextJs", icon: <SiNextdotjs className="text-gray-500" /> },
      {
        name: "TailwindCss",
        icon: <SiTailwindcss className="text-blue-500" />,
      },
    ],
    imageUrl: "/v2.png",
    liveLink: "https://fahad-protfolio-v2.vercel.app/",
    githubLink: "https://github.com/mdfahad-khan/Fahad-ProtfolioV2",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-blue-900 p-4">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 p-4"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 1 }} // Delay of 1 second per card
          >
            <div className="bg-[#061E3D] shadow-lg rounded-lg overflow-hidden h-96">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-[23px] font-extrabold mb-2 bg-gradient-to-l from-[#6CD7F6] via-teal-500 to-pink-500 bg-clip-text text-transparent ">
                  {project.title}
                </h2>
                <p className="text-gray-200">{project.description}</p>
                <div className="flex space-x-2 mt-2">
                  {project.languages.map((lang, langIndex) => (
                    <span key={langIndex} className="flex items-center">
                      {lang.icon}
                      <span className="ml-1 text-gray-200">{lang.name}</span>
                    </span>
                  ))}
                </div>
                <div className="mt-4 no-underline">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-200 hover:underline mr-4"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-200 hover:underline"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
