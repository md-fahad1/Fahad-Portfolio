"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
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
} from "react-icons/si";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Node.js", icon: FaNodeJs },
  { name: "NestJS", icon: SiNestjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Python", icon: FaPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
];

const experience = [
  { role: "Frontend Developer", company: "ConnectAuz" },
  { role: "Frontend Developer", company: "PI Alpha Lab" },
  { role: "Intern", company: "Genex Infosys Limited" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
};

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 flex flex-col items-center"
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
        className="text-center mb-12 sm:mb-16 max-w-xl px-2"
      >
        <span
          className="inline-block text-xs tracking-widest uppercase text-blue-400 mb-3 font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.2em" }}
        >
          Get to know me
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          About me
        </h2>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Photo column */}
        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg,#3b82f6,#22d3ee)",
                transform: "rotate(6deg)",
              }}
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-blue-500/30 bg-slate-900">
              <Image
                src="/fahad6.jpg"
                alt="Portrait"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-xs">
            <div className="rounded-xl border border-blue-500/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-xs text-slate-400 mt-1">Roles held</p>
            </div>
            <div className="rounded-xl border border-blue-500/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">13+</p>
              <p className="text-xs text-slate-400 mt-1">Technologies</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 mt-6 w-full max-w-xs">
            <a
              href="/resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
            >
              <HiOutlineDownload className="text-base" />
              Resume
            </a>
            <a
              href="#contact"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500/40 hover:border-blue-400 text-blue-300 text-sm font-semibold px-4 py-2.5 transition-colors"
            >
              <HiOutlineMail className="text-base" />
              Contact
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8"
        >
          <h3
            className="text-xl sm:text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Junior Full-Stack Developer
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            I'm passionate about building modern, scalable, and user-friendly
            web applications. I previously worked as a Frontend Developer at{" "}
            <span className="text-blue-400 font-medium">ConnectAuz</span>,
            where I built responsive web applications using Angular and
            GraphQL. Before that, I worked at{" "}
            <span className="text-blue-400 font-medium">PI Alpha Lab</span>{" "}
            and completed my internship at{" "}
            <span className="text-blue-400 font-medium">
              Genex Infosys Limited
            </span>
            , gaining hands-on experience in real-world software development.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            I hold a B.Sc. in Computer Science and Engineering from American
            International University-Bangladesh (AIUB), and I'm currently
            seeking a Full-Stack or Frontend Developer role where I can
            contribute to meaningful projects and keep growing as an
            engineer.
          </p>

          {/* Experience chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {experience.map((item) => (
              <span
                key={item.company}
                className="text-xs px-3 py-1.5 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/5"
              >
                {item.role} · {item.company}
              </span>
            ))}
          </div>

          {/* Skills */}
          <h4 className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wide">
            Tech stack
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {skills.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-2 rounded-lg border border-blue-500/20 bg-white/5 text-slate-200 hover:border-blue-400/60 hover:bg-white/10 transition-colors"
              >
                <Icon className="text-blue-400 text-base" />
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&display=swap');
      `}</style>
    </section>
  );
};

export default About;