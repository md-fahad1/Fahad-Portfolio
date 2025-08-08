"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcDownload } from "react-icons/fc";

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
const About = ({ file, downloadName }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timer;
    if (isDownloading) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsDownloading(false);
            setIsComplete(true);
            return 100;
          }
          return prev + 1;
        });
      }, 20); // Adjust speed of the progress
    }

    return () => clearInterval(timer);
  }, [isDownloading]);
  const handleDownloadClick = () => {
    setIsDownloading(true);
    setProgress(0);
    setIsComplete(false);
  };
  return (
    <section
      className="bg-[#050816] md:px-5 px-2 min-h-screen flex flex-col justify-end"
      id="about"
    >
      <fieldset className="md:h-[80vh] text-white  md:px-6 px-2 mb-6">
        <legend className="bg-blue-500  text-center text-2xl font-bold text-white px-4 rounded-md">
          About Me
        </legend>
        <div className="max-w-full  mx-auto 2xl:h-[60vh] sm:h-auto p-0 rounded-md shadow-lg mt-3 text-black overflow-hidden xl:flex 2xl:flex lg:flex md:flex justify-center">
          <div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className="flex-shrink-0 w-[300px] xl:w-[500px] 2xl:w-[600px] mt-2 xl:ml-6 sm:ml-32 md:ml-10 lg:ml-12 mb-3 sm:mt-8 md:h-[300px] sm:w-[350px] sm:h-[200px] overflow-hidden ml-8"
          >
            <div className="flex gap-10">
              <motion.div
                variants={div1}
                initial="initial"
                whileInView="animate"
                className=""
              >
                <Image
                  src="/fahad.png" // Adjust the path based on your project structure
                  alt="about"
                  className="md:ml-8 sm:ml-0 h-32 object-fit hover:scale-105"
                  width={130} // Set your desired width
                  height={130} // Set your desired height
                />
              </motion.div>
              <motion.div
                variants={div2}
                initial="initial"
                whileInView="animate"
              >
                <Image
                  src="/fahad1.jpg" // Adjust the path based on your project structure
                  alt="about"
                  className="md:ml-8 sm:ml-0 h-32 w-32"
                  width={150} // Set your desired width
                  height={150} // Set your desired height
                />
              </motion.div>
            </div>
            <div className="flex mt-10 gap-10">
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
            </div>
          </div>
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="w-[300px] sm:w-[620px] md:w-[400px] lg:w-[550px] xl:w-[600px] 2xl:w-[800px] h-auto xl:h-[600px] ml-[30px] pl-2 xl:mt-2"
          >
            <motion.div
              variants={textVariants}
              whileInView="animate"
              className="text-white duration-100 text-justify"
            >
              <p className="text-[11px] sm:text-[13px] md:text-[14] lg:text-[16px] xl:text-[17px] 2xl:text-[23px]">
                I've just completed a rigorous journey through the halls of
                American International University-Bangladesh, emerging with a
                Bachelor's degree in Computer Science Engineering. My academic
                adventure exposed me to the core principles of algorithms, data
                structures, software engineering, and more, fueling my desire to
                apply these skills in a real-world setting. Proficient in
                Python, HTML, CSS, JavaScript, typescript, Nodejs,Next js React
                js, databases, and APIs. Innovation enthusiast with a knack for
                quick learning. Explored many projects showcasing adaptability.
                Effective collaborator with refined teamwork and communication
                skills from group projects, code force, and coding challenges.
                Web development aficionado.Seeking a dynamic role to channel my
                tech skills and drive innovation. Open to software development,
                system analysis, and more.
              </p>
              <div
                style={{ width: "190px", margin: "0 auto" }}
                className="mt-8 items-start"
              >
                <button
                  className={`border-2 hover:bg-[#3DB0E1] mt-3 md:mt-6 mb-4 animate-glow-border flex gap-2 px-2 py-1 ${
                    isDownloading ? "opacity-50" : ""
                  }`}
                  onClick={handleDownloadClick}
                  disabled={isDownloading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  asChild
                >
                  <a href={file} className=" flex" download={downloadName}>
                    {!isDownloading && <FcDownload className="mt-1" />}
                    <span>
                      {isDownloading ? (
                        <div className="flex flex-row">
                          <Image
                            src="/download.gif"
                            alt="download"
                            width={20}
                            height={20}
                            style={{ marginRight: "10px" }}
                          />
                          <span>{`${progress}% Downloading...`}</span>
                        </div>
                      ) : (
                        "Download CV"
                      )}
                    </span>
                  </a>

                  {/* <Link href="/resume">Get Resume</Link> */}
                </button>
                {isDownloading && (
                  <div style={{ marginTop: "0px" }}>
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "#f3f3f3",
                        borderRadius: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${progress}%`,
                          height: "10px",
                          backgroundColor: "#16a085",
                          textAlign: "center",
                          lineHeight: "2px",
                          color: "white",
                          borderRadius: "1px",
                        }}
                      />
                    </div>
                  </div>
                )}
                {isComplete && (
                  <div
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Download Complete!
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </fieldset>
    </section>
  );
};

export default About;
