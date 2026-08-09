"use client";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaUser,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const fadeItem = {
  initial: { y: 18, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const staggerCol = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  { icon: HiOutlineMail, label: "Email", value: "mdfahadkhan01701@gmail.com", href: "mailto:mdfahadkhan01701@gmail.com" },
  { icon: HiOutlinePhone, label: "Phone", value: "01761402081", href: "tel:01761402081" },
  { icon: HiOutlineLocationMarker, label: "Location", value: "Bangladesh", href: null },
];

const socials = [
  { Icon: FaFacebook, href: "https://www.facebook.com/farseitsolution?mibextid=LQQJ4d", label: "Facebook" },
  { Icon: FaTwitter, href: "https://twitter.com/FarseIT", label: "Twitter" },
  { Icon: FaInstagram, href: "https://twitter.com/FarseIT", label: "Instagram" },
  { Icon: FaLinkedin, href: "https://twitter.com/FarseIT", label: "LinkedIn" },
];

// Floating-label field with an embedded icon; label animates up on focus/fill
const FormField = ({
  as = "input",
  icon: Icon,
  label,
  name,
  value,
  onChange,
  error,
  rows,
  type = "text",
}) => {
  const [focused, setFocused] = useState(false);
  const Tag = as;
  const floated = focused || value.length > 0;

  return (
    <div className="mb-5 relative">
      <div className="relative">
        {Icon && (
          <span
            className={`absolute left-3.5 z-10 text-sm transition-colors duration-200 ${
              as === "textarea" ? "top-3.5" : "top-1/2 -translate-y-1/2"
            } ${focused ? "text-cyan-300" : "text-slate-500"}`}
          >
            <Icon />
          </span>
        )}
        <motion.label
          initial={false}
          animate={{
            top: floated ? "-9px" : as === "textarea" ? "14px" : "50%",
            fontSize: floated ? "11px" : "14px",
            y: floated ? 0 : as === "textarea" ? 0 : "-50%",
          }}
          transition={{ duration: 0.18 }}
          className={`absolute pointer-events-none px-1.5 rounded ${
            Icon ? "left-9" : "left-3.5"
          } ${
            floated
              ? "bg-[#0b1330] text-cyan-300 font-medium"
              : "text-slate-500"
          }`}
          style={{ left: floated ? "12px" : undefined }}
        >
          {label}
        </motion.label>
        <Tag
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`block w-full ${Icon ? "pl-9" : "pl-3.5"} pr-3.5 pt-3 pb-2.5 text-sm sm:text-[15px] text-white rounded-lg bg-white/5 border transition-colors duration-200 outline-none resize-none ${
            error
              ? "border-red-500/60 focus:border-red-400"
              : "border-slate-700 focus:border-cyan-400/70"
          }`}
          {...(as === "input" ? { type } : {})}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const cardRef = useRef(null);

  // subtle tilt on the form card
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 100, damping: 20 });
  const springY = useSpring(my, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [1.5, -1.5]);
  const rotateY = useTransform(springX, [0, 1], [-1.5, 1.5]);
  const handleCardMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const resetCard = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
    setIsEmailSent(false);
    setIsError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const serviceID = process.env.NEXT_PUBLIC_Service_ID;
      const templateID = process.env.NEXT_PUBLIC_Template_ID;
      const publicKey = process.env.NEXT_PUBLIC_Public_Key;

      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

      formRef.current.reset();
      setFormData({ name: "", email: "", message: "" });
      setIsEmailSent(true);
      setIsError(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #0a1a3d 0%, #050816 55%, #050816 100%)",
      }}
    >
      {/* dot-grid texture, consistent with hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ambient orbs */}
      <motion.div
        className="pointer-events-none absolute top-0 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "#3b82f6" }}
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "#22d3ee" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-12 sm:mb-14 max-w-xl mx-auto px-2"
      >
        <span
          className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/5 mb-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Usually replies within 24 hours
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Let&apos;s work together
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
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
      </motion.div>

      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
        {/* Info column */}
        <motion.div
          variants={staggerCol}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-2 relative rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-sm p-6 sm:p-8 flex flex-col overflow-hidden"
        >
          {/* corner glow */}
          <div
            className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-3xl"
            style={{ background: "#3b82f6" }}
          />

          <motion.h3
            variants={fadeItem}
            className="relative text-lg sm:text-xl font-bold text-white mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contact information
          </motion.h3>
          <motion.p variants={fadeItem} className="relative text-slate-400 text-sm mb-7">
            Reach out directly, or use the form and I&apos;ll get back to you
            as soon as I can.
          </motion.p>

          <div className="relative flex flex-col gap-4 mb-8">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <motion.div key={label} variants={fadeItem}>
                  <Wrapper
                    href={href || undefined}
                    className={`flex items-center gap-3 group ${href ? "cursor-pointer" : ""}`}
                  >
                    <span className="w-10 h-10 shrink-0 rounded-lg border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:border-cyan-400/60 group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-200">
                      <Icon className="text-base" />
                    </span>
                    <span className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wide text-slate-500">
                        {label}
                      </p>
                      <p className="text-sm text-slate-200 truncate group-hover:text-cyan-300 transition-colors">
                        {value}
                      </p>
                    </span>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeItem} className="relative mt-auto">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Connect on social
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Form column */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleCardMove}
          onMouseLeave={resetCard}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1200 }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-sm p-6 sm:p-8"
        >
          <h3
            className="text-lg sm:text-xl font-bold text-white mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Send a message
          </h3>
          <p className="text-slate-400 text-sm mb-7">
            Fill out the form below — I&apos;ll reply as soon as I can.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <FormField
                icon={FaUser}
                label="Your name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
              />
              <FormField
                icon={HiOutlineMail}
                label="Your email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
              />
            </div>
            <FormField
              as="textarea"
              label="Message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              error={formErrors.message}
            />

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: 0.97 }}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg text-white text-sm font-semibold px-7 py-3 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              style={{
                background: isEmailSent
                  ? "linear-gradient(90deg,#10b981,#22d3ee)"
                  : "linear-gradient(90deg,#3b82f6,#22d3ee)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isLoading ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
                    Sending...
                  </motion.span>
                ) : isEmailSent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FaCheck className="text-xs" />
                    Message sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Send message
                    <FaPaperPlane className="text-xs" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {isError && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm text-red-400"
                >
                  Failed to send your message. Please try again later.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap');
      `}</style>
    </section>
  );
};

export default Contact;