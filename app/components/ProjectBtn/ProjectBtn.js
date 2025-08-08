"use client";
import Link from "next/link";
import "./Navbar.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaDiscord,
  FaArrowsAlt,
} from "react-icons/fa";

const ProjectsBtn = () => {
  return (
    <div className="main w-12">
      <div className="all flex flex-wrap absolute right-10 top-4 z-30 w-[8em] justify-center hover:bg-transparent">
        <div className="card">
          <Link
            href="https://www.facebook.com/profile.php?id=100091652379060"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon facebook" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link
            href="https://www.instagram.com/evanahmedfahad8/"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link href="https://x.com/EvanAhmedFahad1" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon twitter" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link href="https://github.com/mdfahad-khan" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon github" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link href="" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FaArrowsAlt className="icon email" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link
            href="mailto:mdfahadkhan01701@gmail.com"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon email" />
            </a>
          </Link>
        </div>

        <div className="card">
          <Link href="https://telegram.org" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FaTelegram className="icon telegram" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link
            href="https://www.linkedin.com/in/md-fahad-khan/"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
          </Link>
        </div>
        <div className="card">
          <Link
            href="https://discord.com/channels/fahadkhan4594"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaDiscord className="icon discord" />
            </a>
          </Link>
        </div>

        <a className="text text-white md:mr-10 mr-[60px]">
          <span className="">CONNECT</span>
        </a>
        <div className="main_back"></div>
      </div>
    </div>
  );
};

export default ProjectsBtn;
