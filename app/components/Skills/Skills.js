"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiVercel,
  SiPostman,
  SiDocker,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Python", icon: FaPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools & workflow",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

const marqueeIcons = categories.flatMap((c) => c.skills);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 overflow-hidden"
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
        className="text-center mb-14 sm:mb-16 max-w-xl mx-auto px-2"
      >
        <span
          className="inline-block text-xs tracking-widest uppercase text-blue-400 mb-3 font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.2em" }}
        >
          What I work with
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Tools & technologies
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-3">
          The languages, frameworks, and tools I use to design, build, and
          ship full-stack applications.
        </p>
      </motion.div>

      {/* Category grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-sm p-5 sm:p-6"
          >
            <h3
              className="text-white font-bold text-sm sm:text-base mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-2.5 py-1.5 rounded-lg border border-blue-500/20 bg-white/5 text-slate-200 hover:border-blue-400/60 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="text-blue-400 text-sm sm:text-base" />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Infinite marquee strip */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#050816] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-[#050816] to-transparent" />

        <div className="overflow-hidden rounded-xl border border-blue-500/10 bg-white/5 py-4">
          <motion.div
            className="flex gap-8 sm:gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {[...marqueeIcons, ...marqueeIcons].map(({ name, icon: Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 shrink-0 text-slate-400"
                title={name}
              >
                <Icon className="text-xl sm:text-2xl text-blue-400/80" />
                <span className="text-xs sm:text-sm whitespace-nowrap hidden sm:inline">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;