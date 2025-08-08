import { motion } from "framer-motion";

import Image from "next/image";
const textVariants1 = {
  initial: {
    x: -40,
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
    x: 40,
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
const textVariants3 = {
  initial: {
    y: 40,
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

const Logo = ({ className }) => {
  return (
    <div className="flex">
      <div>
        <motion.div
          variants={textVariants1}
          initial="initial"
          whileInView="animate"
          className=" border-4 border-[#64EFDA] rounded-full animate-glow-border"
        >
          <Image src={"/icon-logo.png"} width={60} height={60} alt="logo" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-0 ml-4">
        <motion.span
          className="  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl mt-1  md:mt-0 md:text-3xl font-extrabold  text-transparent text-center select-auto"
          style={{ letterSpacing: "-0.05em" }}
          variants={textVariants2}
          initial="initial"
          whileInView="animate"
        >
          MD FAHAD KHAN
        </motion.span>

        <motion.div
          className=" text-2xl mt-0 md:mt-0 md:text-xl italic   text-blue-400  "
          style={{ letterSpacing: "-0.01em" }}
          variants={textVariants3}
          initial="initial"
          whileInView="animate"
        >
          DEVELOPER
        </motion.div>
      </div>
    </div>
  );
};

export default Logo;
