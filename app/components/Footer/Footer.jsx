"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: FaGithub, href: "https://github.com/md-fahad1", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/md-fahad-khan/", label: "LinkedIn" },
  { Icon: FaFacebook, href: "https://www.facebook.com/farseitsolution?mibextid=LQQJ4d", label: "Facebook" },
  { Icon: FaTwitter, href: "https://twitter.com/FarseIT", label: "Twitter" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full px-4 sm:px-6 md:px-10 pt-16 pb-8 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #0a1a3d 0%, #050816 55%, #050816 100%)",
      }}
    >
      {/* top border gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #22d3ee, transparent)" }}
      />

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "#3b82f6" }}
      />

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Evan Ahmed Fahad
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-5">
              Full-Stack Developer building modern, scalable, and
              user-friendly web applications — turning ideas into real
              products.
            </p>
            <a
              href="mailto:mdfahadkhan01701@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <HiOutlineMail className="text-base" />
              mdfahadkhan01701@gmail.com
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            © {year} Evan Ahmed Fahad. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 order-first sm:order-none">
            Built with <FaHeart className="text-red-400 text-[10px]" /> and lots of coffee
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
            style={{ background: "linear-gradient(135deg,#3b82f6,#22d3ee)" }}
          >
            <FaArrowUp className="text-xs" />
          </motion.button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;