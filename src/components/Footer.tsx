import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-16">
      <nav className="grid grid-flow-col gap-4">
        <a href="#Home" className="link link-hover">
          Home
        </a>
        <a href="#Experience" className="link link-hover">
          Experience
        </a>
        <a href="#AboutMe" className="link link-hover">
          About Me
        </a>
        <a href="#Contact" className="link link-hover">
          Contact
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://www.instagram.com/luca.christl01/"
            target="_blank"
            className="cursor-pointer"
          >
            <FaInstagram style={{ height: "32px", width: "32px" }} />
          </a>
          <a
            href="https://github.com/LucaStephan-Christl"
            className="cursor-pointer"
            target="_blank"
          >
            <FaGithub style={{ height: "32px", width: "32px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/luca-christl-36a783308/"
            target="_blank"
            className="cursor-pointer"
          >
            <FaLinkedinIn style={{ height: "32px", width: "32px" }} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Luca
          Christl
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
