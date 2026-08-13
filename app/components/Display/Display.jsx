"use client";
import Swal from "sweetalert2";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const fadeItem = {
  initial: { y: 22, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const textCol = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Companies" },
];

const Display = ({ file, downloadName }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const strings = useMemo(
    () => ["Full-Stack Developer", "Frontend Engineer", "Freelancer"],
    []
  );
  const [typedText, setTypedText] = useState("");

  // gentle parallax on the portrait panel
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);
  const panelRef = useRef(null);

  const handlePointerMove = (e) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const resetPointer = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  // Download progress
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
          return prev + 2;
        });
      }, 20);
    }
    return () => clearInterval(timer);
  }, [isDownloading]);

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

  // Typewriter effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((current) => {
        const fullText = strings[textIndex];
        if (current.length < fullText.length) {
          return fullText.substring(0, current.length + 1);
        }
        return current;
      });
    }, 90);

    const switchTimeout = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % strings.length);
      setTypedText("");
    }, 3200);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(switchTimeout);
    };
  }, [textIndex, strings]);

  useEffect(() => {
    if (isComplete) {
      Swal.fire({
        toast: true,
        position: "bottom-start",
        icon: "success",
        title: "Download complete!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        customClass: { popup: "text-xs px-3 py-2" },
      });
    }
  }, [isComplete]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-24 lg:py-20"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #0a1a3d 0%, #050816 55%, #050816 100%)",
      }}
    >
      {/* faint dot-grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ambient orbs */}
      <motion.div
        className="pointer-events-none absolute top-10 -left-24 w-72 h-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "#3b82f6" }}
        animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "#22d3ee" }}
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Text column */}
        <motion.div
          variants={textCol}
          initial="initial"
          animate="animate"
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.span
            variants={fadeItem}
            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/5 mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Available for work
          </motion.span>

          <motion.h3
            variants={fadeItem}
            className="text-lg sm:text-xl md:text-2xl text-slate-300"
          >
            Hello, I&apos;m
          </motion.h3>

          <motion.h1
            variants={fadeItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold text-white mt-1 leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
           Md Fahad Khan
          </motion.h1>

          <motion.div
            variants={fadeItem}
            className="h-9 sm:h-10 md:h-11 mt-3 flex items-center justify-center lg:justify-start"
          >
            <span
              className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg,#3b82f6,#22d3ee)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {typedText}
            </span>
            <span className="w-0.5 h-5 sm:h-6 md:h-7 bg-cyan-400 ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            variants={fadeItem}
            className="text-slate-400 mt-5 text-sm sm:text-base leading-relaxed max-w-md"
          >
            I love building user interfaces and web applications with modern
            technologies — turning ideas into real, working products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeItem}
            className="flex flex-wrap gap-3 mt-8 items-center justify-center lg:justify-start"
          >
            <div className="flex flex-col items-start">
              <button
                onClick={handleDownloadClick}
                disabled={isDownloading}
                type="button"
                className={`inline-flex items-center gap-2 rounded-lg text-white text-sm font-semibold px-6 py-3 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDownloading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{ background: "linear-gradient(90deg,#3b82f6,#22d3ee)" }}
              >
                {isDownloading ? (
                  <span
                    className="flex items-center gap-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
                    {progress}%
                  </span>
                ) : (
                  <>
                    <FaDownload className="text-sm" />
                    Download resume
                  </>
                )}
              </button>
              {isDownloading && (
                <div className="w-full bg-slate-800 rounded-full overflow-hidden h-1 mt-2">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg,#3b82f6,#22d3ee)",
                    }}
                  />
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-600 hover:border-cyan-400/60 text-white text-sm font-semibold px-6 py-3 transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire me
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeItem}
            className="flex gap-3 mt-8"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { Icon: HiOutlineMail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeItem}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-8 border-t border-slate-800 w-full max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 lg:col-span-5 flex justify-center w-full"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
            {/* corner frame accents */}
            <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />

            <div
              ref={panelRef}
              onMouseMove={handlePointerMove}
              onMouseLeave={resetPointer}
              style={{ perspective: 900 }}
              className="relative"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-blue-500/25 bg-[#0a1330] shadow-2xl shadow-blue-950/50"
              >
                <Image
                  src="/fahadkhan.png"
                  alt="Portrait of Fahad Khan"
                  fill
                  sizes="(max-width: 768px) 280px, 384px"
                  className="object-cover object-top"
                  priority
                />
                {/* blend the photo edges into the panel instead of a hard cutout line */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(5,8,22,0) 55%, rgba(5,8,22,0.85) 100%), linear-gradient(0deg, rgba(5,8,22,0.25), rgba(5,8,22,0) 25%)",
                  }}
                />
                {/* subtle top sheen */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, transparent 40%)",
                  }}
                />
              </motion.div>
            </div>

            {/* floating card — availability, sits outside the photo, never overlaps */}
            <motion.div
              initial={{ opacity: 0, y: 12, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -left-4 sm:-left-6 top-6 rounded-xl border border-blue-500/25 bg-[#0c1732]/95 backdrop-blur-sm px-3.5 py-2.5 shadow-xl"
            >
              <p className="text-[10px] text-slate-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Working
              </p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                RMS
              </p>
            </motion.div>

            {/* floating card — experience, bottom edge, outside the photo */}
            <motion.div
              initial={{ opacity: 0, y: -12, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -right-4 sm:-right-6 bottom-6 rounded-xl border border-cyan-400/25 bg-[#0c1732]/95 backdrop-blur-sm px-3.5 py-2.5 shadow-xl"
            >
              <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                2+ years
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-cyan-400" />
        </span>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap');
      `}</style>
    </section>
  );
};

export default Display;