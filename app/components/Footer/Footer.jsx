import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 pl-8 pr-8">
      <div className="max-w-screen-xl px-4 pt-8 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-12">
        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center flex flex-col items-center gap-3 md:flex-row justify-between  ">
            <div className="flex gap-4 text-[28px]">
              <Link
                href="https://github.com/md-fahad1"
                className="inline-block text-[#3db0e1] underline transition hover:text-teal-500/75"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/md-fahad-khan/"
                className="inline-block text-[#3db0e1] underline transition hover:text-teal-500/75"
              >
                <FaLinkedin />
              </Link>
            </div>
            <div className="text-[18px]  text-gray-400 flex gap-4 font-semibold  ">
              Have a Good Day!!
            </div>

            <p className=" text-[18px] font-semibold text-gray-400 sm:order-first sm:mt-0">
              Evan Ahmed Fahad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
