"use client";
import Swal from "sweetalert2";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { FcDownload } from "react-icons/fc";

const imgVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 4, staggerChildren: 0.1 },
  },
};

const textVariants1 = {
  initial: { x: -200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const textVariants2 = {
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Display = ({ file, downloadName }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const strings = useMemo(
    () => ["Youtuber", "Front-End Developer", "Freelancer"],
    []
  );
  const [typedText, setTypedText] = useState("");

  // Download progress effect
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
      }, 20);
    }

    return () => clearInterval(timer);
  }, [isDownloading]);

  // Trigger download when progress reaches 100
  useEffect(() => {
    if (progress >= 100 && isDownloading) {
      const link = document.createElement("a");
      link.href = file || "/Fahad.pdf";
      link.download = downloadName || "Fahad.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setIsComplete(true);
    }
  }, [progress, isDownloading, file, downloadName]);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setProgress(0);
    setIsComplete(false);
  };

  // Combined typing animation & switching strings effect
  useEffect(() => {
    let typingInterval;
    let switchTimeout;

    // Typing effect
    typingInterval = setInterval(() => {
      setTypedText((current) => {
        const fullText = strings[textIndex];
        if (current.length < fullText.length) {
          return fullText.substring(0, current.length + 1);
        }
        return current;
      });
    }, 100);

    // Switch text after 3.5 seconds
    switchTimeout = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % strings.length);
      setTypedText("");
    }, 3500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(switchTimeout);
    };
  }, [textIndex, strings]);

  // Show Swal toast on download complete
  useEffect(() => {
    if (isComplete) {
      Swal.fire({
        toast: true,
        position: "bottom-start", // bottom-left corner
        icon: "success",
        title: "Download Complete!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        customClass: {
          popup: "text-xs px-3 py-2",
        },
      });
    }
  }, [isComplete]);

  return (
    <section
      className="w-full min-h-[60vh] md:min-h-[80vh] flex  flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 bg-[#041e42] text-white"
      id="home"
    >
      {/* Text Content - on left for desktop */}
      <motion.div
        className="flex flex-col justify-center max-w-xl mt-10 md:mt-0 mb-8 md:mb-0 md:order-1"
        variants={textVariants1}
        initial="initial"
        animate="animate"
      >
        <motion.h3
          className="text-xl md:text-3xl flex items-center gap-2"
          variants={textVariants1}
        >
          <span className="text-white">Hello</span>
        </motion.h3>

        <motion.h1
          className="text-xl md:text-5xl font-medium mt-1 md:mt-2"
          variants={textVariants1}
        >
          I&apos;m <span className="font-bold">{typedText}</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-2 md:mt-6 text-sm md:text-base leading-relaxed"
          variants={textVariants2}
        >
          I love to develop user interfaces and web applications using the
          latest technologies. Transforming ideas into reality through code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-1 mt-4 items-center"
          variants={textVariants2}
          initial="initial"
          animate="animate"
        >
          {/* Download Button Container */}
          <div className="w-[130px] flex flex-col items-center">
            <button
              className={`border-2 border-[#3DB0E1] hover:bg-[#3DB0E1] text-white  animate-glow-border flex items-center justify-center gap-2 px-4 py-0.5  ${
                isDownloading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleDownloadClick}
              disabled={isDownloading}
              type="button"
            >
              {!isDownloading && <FcDownload className="mt-1" size={14} />}
              {isDownloading ? (
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src="/download.gif"
                    alt="Downloading"
                    width={14}
                    height={14}
                    style={{ marginRight: 0 }}
                  />
                  <span className="text-sm flex flex-row">{progress}%</span>
                </div>
              ) : (
                "RESUME"
              )}
            </button>

            {/* Progress Bar */}
            {isDownloading && (
              <div className="w-full bg-gray-300 rounded overflow-hidden h-2 mt-1">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-2 bg-[#16a085] transition-all"
                />
              </div>
            )}
          </div>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className=" text-white text-sm md:text-md bg-[#3DB0E1] px-4 py-1.5  transition flex items-center justify-center whitespace-nowrap"
          >
            HIRE ME
          </a>
        </motion.div>
      </motion.div>

      {/* Image with Arrows - on right for desktop, on top for mobile */}
      <motion.div
        className="relative h-[300px] w-[300px] md:w-[550px] md:h-[480px]  mt-1 md:mt-0 flex items-center md:order-2"
        variants={imgVariants}
        initial="initial"
        animate="animate"
      >
        {/* Left Arrow - hidden on mobile */}
        <span
          className="text-transparent text-[100px] font-extrabold md:mb-48 select-none hidden md:inline-block"
          style={{
            WebkitTextStroke: "1px #12A4F5",
            textShadow: "0 0 20px #12A4F5",
          }}
        >
          {"<"}
        </span>

        {/* Image with Circular Border */}
        <div className="relative md:w-[550px] md:h-[550px] ">
          <div
            className="absolute top-1/2 -translate-y-1/2 left-3 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-[18px] border-[#12A4F5]"
            style={{
              boxShadow: `
                0 0 40px rgba(18, 164, 245, 0.35),
                0 0 80px rgba(18, 164, 245, 0.25),
                inset 0 0 25px rgba(18, 164, 245, 0.3),
                inset 0 0 50px rgba(18, 164, 245, 0.2)
              `,
            }}
          />
          <Image
            src="/fahadkhan.png"
            alt="Profile"
            width={550}
            height={550}
            className="rounded-lg relative z-10 object-cover mt-10  "
          />
        </div>

        {/* Right Arrow - hidden on mobile */}
        <span
          className="text-transparent text-[100px] font-extrabold mt-40 select-none hidden md:inline-block"
          style={{
            WebkitTextStroke: "1px #12A4F5",
            textShadow: "0 0 20px #12A4F5",
          }}
        >
          {">"}
        </span>
      </motion.div>
    </section>
  );
};

export default Display;
