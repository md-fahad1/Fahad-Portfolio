"use client";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { BsSendArrowUpFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdAttachEmail, MdOutlineAttachEmail } from "react-icons/md";

const div1 = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
const div2 = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Define refs
  const formRef = useRef(null);
  const ref = useRef(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      try {
        const serviceID = process.env.NEXT_PUBLIC_Service_ID;
        const templateID = process.env.NEXT_PUBLIC_Template_ID;
        const publicKey = process.env.NEXT_PUBLIC_Public_Key;

        const response = await emailjs.sendForm(
          serviceID,
          templateID,
          formRef.current,
          publicKey
        );
        console.log("Email sent successfully!", response);
        // Reset form fields
        formRef.current.reset();
        // Set state to indicate email sent successfully
        setIsEmailSent(true);
        // Reset error state
        setIsError(false);
      } catch (error) {
        console.error("Error sending email:", error);
        // Set state to indicate error sending email
        setIsError(true);
      } finally {
        // Set loading state to false
        setIsLoading(false);
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

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

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "", // Clear the error message when the field value changes
    });
  };

  // UseInView hook
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      className="flex flex-col items-center content-center justify-center  min-h-screen bg-[#05152F]"
      id="contact"
    >
      <div className="grid max-w-7xl grid-cols-1 gap-8 p-12 mt-5  rounded-md shadow-lg md:grid-cols-2">
        <motion.div
          className="text-center md:text-left bg-[#1F2937] md:h-80 mt-16  p-4 rounded-md"
          variants={div1}
          initial="initial"
          whileInView="animate"
        >
          <h1 className="mt-1 mb-3 text-3xl font-bold text-slate-300">
            Contact Us
          </h1>
          <p className="mb-4 md:text-lg text-slate-400">
            Have questions or need assistance? Feel free to reach out to us
            using the contact form or the information below:
          </p>
          <p className=" text-slate-300 flex items-center gap-2 text-xl">
            <MdOutlineAttachEmail />
            <span>Email: mdfahadkhan01701@gmail.com</span>
          </p>
          <p className=" text-slate-300 flex items-center text-xl gap-2">
            <BiPhone />
            <span>Phone: 01761402081</span>
          </p>

          <div className="mt-4">
            <p className="mb-2 md:text-xl text-[16px] font-semibold text-slate-300">
              Connect with us on social media:
            </p>
            <div className="flex space-x-4 text-2xl text-slate-300">
              <a
                href="https://www.facebook.com/farseitsolution?mibextid=LQQJ4d"
                className=" hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/FarseIT"
                className=" hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://twitter.com/FarseIT"
                className=" hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/FarseIT"
                className=" hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative flex-1 bg-[#1F2937] p-4 rounded-md"
          variants={div2}
          initial="initial"
          whileInView="animate"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=""
          >
            <span className="text-xl mb-1 text-slate-300 font-semibold">
              Get in Touch With Me
            </span>
            <div className="text-sm mb-4 text-slate-400">
              Use the form below to send us a message or ask any questions
            </div>
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-stone-200 text-[18px] mb-2 border-gray-500 border-2  rounded-md bg-transparent focus:border-green-500 focus:ring-green-500 focus:outline-none"
            />
            {formErrors.name && (
              <p className="mb-2 text-sm text-red-500">{formErrors.name}</p>
            )}
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mb-2 text-stone-200 text-[18px] border-gray-500 border-2 rounded-md bg-transparent focus:border-green-500 focus:ring-green-500 focus:outline-none"
            />
            {formErrors.email && (
              <p className="mb-2 text-sm text-red-500">{formErrors.email}</p>
            )}
            <textarea
              rows={8}
              required
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-4 py-2 mb-2 text-stone-200 text-[18px] border-gray-500 border-2 resize-none rounded-md bg-transparent focus:border-green-500 focus:ring-green-500 focus:outline-none"
            />
            {formErrors.message && (
              <p className="mb-2 text-sm text-red-500">{formErrors.message}</p>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="  py-2 mt-2 w-60 text-center items-center font-semibold text-slate-600 bg-slate-300 rounded-md hover:bg-slate-400"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Send Message"}{" "}
                {/* <BsSendArrowUpFill /> */}
              </button>
            </div>
            {isError && (
              <p className="mt-2 text-sm text-red-500">
                Failed to submit the form. Please try again later.
              </p>
            )}
            {isEmailSent && (
              <p className="mt-2 text-sm text-green-500">
                Your message has been sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
