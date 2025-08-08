"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Fiverr from "/public/Asp.png";
import Amazon from "/public/next.png";
import Shopify from "/public/postgre.png";
import Upwork from "/public/react.png";
import Facebook from "/public/nestjs.webp";
 
const Works = () => {
  const containerRef = useRef(null);
  const circlesRefs = useRef([]);
  const circles = circlesRefs.current;
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
 
    const radius = container.offsetWidth / 2;
    const rotation = 360 / circles.length;
 
    circles.forEach((circle, i) => {
      const value = `rotate(${
        i * rotation
      }deg) translate(${radius}px) rotate(-${i * rotation}deg)`;
      circle.style.transform = value;
    });
  }, [circles]);
 
  return (
    <div className="works" id="works">
      <div className="relative">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="relative w-20 h-20 sm:h-28 sm:w-28 
          md:h-36 md:w-36 lg:w-40 lg:h-40 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80  shadow-sm z-[2] rounded-full left-[260px] top-3 sm:top-2 sm:left-[240px] md:left-[260px] xl:left-36 xl:top-8 2xl:left-40 2xl:top-8 bg-white grid place-items-center"
          ref={containerRef}
        >
          <div
            ref={(el) => (circlesRefs.current[0] = el)}
            className="w-8 h-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:w-24 2xl:w-28 2xl:h-28 xl:h-24 absolute flex items-center justify-center shadow-sm rounded-full border-[5px] border-solid border-[#ebebeb]  bg-white  "
          >
            <Image src={Upwork} alt="" className=" scale-[0.6]" />
          </div>
          <div
            ref={(el) => (circlesRefs.current[1] = el)}
            className="w-8 h-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 absolute flex items-center justify-center shadow-sm rounded-full border-[5px] border-solid border-[#ebebeb] bg-white"
          >
            <Image src={Fiverr} alt="" className=" scale-[0.6]" />
          </div>
          <div className="w-8 h-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 absolute flex items-center justify-center shadow-sm rounded-full border-[5px] border-solid border-[#ebebeb] bg-white ">
            <Image src={Amazon} alt="" className=" scale-[0.6]" />
          </div>{" "}
          <div
            ref={(el) => (circlesRefs.current[2] = el)}
            className="w-8 h-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 absolute flex items-center justify-center shadow-sm rounded-full border-[5px] border-solid border-[#ebebeb] bg-white "
          >
            <Image src={Shopify} alt="" className=" scale-[0.6]" />
          </div>
          <div
            ref={(el) => (circlesRefs.current[3] = el)}
            className="w-8 h-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:w-16 lg:h-16 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 absolute flex items-center justify-center shadow-sm rounded-full border-[5px] border-solid border-[#ebebeb] bg-white "
          >
            <Image src={Facebook} alt="" className=" scale-[0.6]" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="absolute h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-52 xl:w-52 2xl:w-60 2xl:h-60 z-[1] rounded-full left-[300px] top-2 md:bottom-16 sm:left-[305px] md:left-[320px] xl:left-72 2xl:left-72 xl:top-0 bg-[#1785e5]"></div>
        <div className="absolute h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-52 xl:w-52 2xl:w-60 2xl:h-60 z-[1] xl:left-72 xl:top-32 2xl:top-36 rounded-full left-[300px] md:left-[320px] top-12 md:top-12 bg-[#f5c32c]"></div>
        {/* <div className="absolute h-52 w-52 z-[1] rounded-full left-72 top-0 bg-[#1785e5]"></div>
        <div className="absolute h-52 w-52 z-[1] rounded-full left-72 top-32 bg-[#f5c32c]"></div> */}
      </div>
    </div>
  );
};
export default Works;
 
