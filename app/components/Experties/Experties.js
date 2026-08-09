"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaPaintBrush,
  FaPlug,
} from "react-icons/fa";

const expertise = [
  {
    title: "Frontend development",
    icon: FaReact,
    level: 80,
    years: "2+ yrs",
    description: "React.js, Next.js, Angular, and building responsive, accessible UIs.",
  },
  {
    title: "Backend development",
    icon: FaServer,
    level: 40,
    years: "6+ months",
    description: "Node.js, NestJS, and REST/GraphQL APIs for scalable services.",
  },
  {
    title: "Database management",
    icon: FaDatabase,
    level: 75,
    years: "1.5+ yrs",
    description: "MongoDB and SQL — schema design, querying, and optimization.",
  },
  {
    title: "API integration",
    icon: FaPlug,
    level: 85,
    years: "2+ yrs",
    description: "GraphQL and RESTful API design, consumption, and documentation.",
  },
  {
    title: "UI engineering",
    icon: FaPaintBrush,
    level: 88,
    years: "2+ yrs",
    description: "Tailwind CSS, design systems, and motion with Framer Motion.",
  },
  {
    title: "Dev tooling",
    icon: FaTools,
    level: 82,
    years: "2+ yrs",
    description: "Git, GitHub workflows, Postman, Docker, and CI-friendly practices.",
  },
];

const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Animated count-up number, starts when the ring scrolls into view
const CountUp = ({ value, inView }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <>{display}%</>;
};

// One tilting, glowing expertise card with an animated ring
const ExpertiseCard = ({ item, index }) => {
  const Icon = item.icon;
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, amount: 0.4 });

  // 3D tilt tracking
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 150, damping: 15 });
  const springY = useSpring(my, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const resetTilt = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const offset = CIRCUMFERENCE - (item.level / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      className="relative rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-sm p-5 sm:p-6 overflow-hidden group"
    >
      {/* cursor-follow glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${glowX} ${glowY}, rgba(59,130,246,0.18), transparent 70%)`,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center border border-blue-500/30 bg-blue-500/10"
          >
            <Icon className="text-blue-400 text-lg" />
          </motion.div>
          <span
            className="text-xs px-2.5 py-1 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {item.years}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 shrink-0">
            <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
              <circle
                cx="32"
                cy="32"
                r={RADIUS}
                fill="none"
                stroke="rgba(148,163,184,0.15)"
                strokeWidth="5"
              />
              <motion.circle
                cx="32"
                cy="32"
                r={RADIUS}
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                initial={{ strokeDashoffset: CIRCUMFERENCE }}
                animate={inView ? { strokeDashoffset: offset } : {}}
                transition={{ duration: 1.3, ease: "easeOut", delay: 0.15 }}
              />
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
              <CountUp value={item.level} inView={inView} />
            </div>
          </div>

          <h3
            className="text-white font-bold text-base sm:text-lg leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {item.title}
          </h3>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* animated border sheen on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ border: "1px solid rgba(34,211,238,0.5)" }}
      />
    </motion.div>
  );
};

const Experties = () => {
  return (
    <section
      id="skills"
      className="relative w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #0a1a3d 0%, #050816 55%, #050816 100%)",
      }}
    >
      {/* floating ambient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "#3b82f6" }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "#22d3ee" }}
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-14 sm:mb-16 max-w-xl mx-auto px-2"
      >
        <span
          className="inline-block text-xs tracking-widest uppercase text-blue-400 mb-3 font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.2em" }}
        >
          Core competencies
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Areas of expertise
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 w-20 mx-auto mt-4 rounded-full"
          style={{ background: "linear-gradient(90deg,#3b82f6,#22d3ee)" }}
        />
        <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4">
          Where I spend most of my time, and how confident I am in each area.
        </p>
      </motion.div>

      {/* Expertise grid */}
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {expertise.map((item, i) => (
          <ExpertiseCard key={item.title} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap');
      `}</style>
    </section>
  );
};

export default Experties;