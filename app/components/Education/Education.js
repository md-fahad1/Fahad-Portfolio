"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaSchool, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    icon: FaGraduationCap,
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    school: "American International University-Bangladesh",
    period: "2020 — 2023",
    current: true,
  },
  {
    icon: FaBook,
    degree: "HSC — Higher Secondary Certificate",
    school: "Shahid President Ziaur Rahman College",
    period: "2017 — 2019",
    current: false,
  },
  {
    icon: FaSchool,
    degree: "SSC — Secondary School Certificate",
    school: "Shantipur Adarsha High School",
    period: "2012 — 2017",
    current: false,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const lineGrow = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
};

const Education = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #0a1a3d 0%, #050816 55%, #050816 100%)",
      }}
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-14 md:mb-16 max-w-xl md:max-w-2xl px-2"
      >
        <span
          className="inline-block text-xs tracking-widest uppercase text-blue-400 mb-3 font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.2em" }}
        >
          Academic path
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Education
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base">
          Three stages, one thread — from secondary school to a computer
          science degree.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        {/* Center connecting line (tablet & up) */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-800">
          <motion.div
            variants={lineGrow}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{
              transformOrigin: "top",
              background: "linear-gradient(180deg,#3b82f6,#22d3ee)",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Left connecting line (mobile only) */}
        <div className="sm:hidden absolute left-5 top-0 bottom-0 w-px bg-slate-800">
          <motion.div
            variants={lineGrow}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{
              transformOrigin: "top",
              background: "linear-gradient(180deg,#3b82f6,#22d3ee)",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
          {education.map((item, i) => {
            const Icon = item.icon;
            const alignRight = i % 2 === 1;
            return (
              <motion.div
                key={item.degree}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-start sm:items-center gap-4 sm:gap-0 ${
                  alignRight ? "sm:flex-row-reverse" : "sm:flex-row"
                }`}
              >
                {/* Node */}
                <div className="relative z-10 shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border-2 ${
                      item.current
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-blue-500 bg-blue-500/10"
                    }`}
                  >
                    <Icon
                      className={`text-sm sm:text-base ${
                        item.current ? "text-cyan-300" : "text-blue-400"
                      }`}
                    />
                  </div>
                  {item.current && (
                    <span className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-40" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`group flex-1 w-full sm:w-5/12 rounded-xl border border-blue-500/20 bg-white/5 backdrop-blur-sm px-4 sm:px-5 py-4 transition-all duration-300 hover:border-blue-400/60 hover:bg-white/10 hover:-translate-y-1 ${
                    alignRight ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <h3
                    className="text-white font-bold text-sm sm:text-sm md:text-base mb-1 leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.degree}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-xs md:text-sm mb-3">
                    {item.school}
                  </p>
                  <div
                    className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
                      item.current
                        ? "border-cyan-400/40 text-cyan-300 bg-cyan-400/10"
                        : "border-blue-500/30 text-blue-300 bg-blue-500/10"
                    }`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <FaCalendarAlt className="text-xs" />
                    {item.period}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&display=swap');
      `}</style>
    </section>
  );
};

export default Education;