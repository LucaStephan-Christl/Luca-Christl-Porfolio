"use client";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { FaAddressBook, FaHome } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";

function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null, // Use the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  return (
    <nav className="">
      <label className="md:hidden btn btn-circle swap swap-rotate fixed top-5 right-5 z-30">
        {/* this hidden checkbox controls the state */}
        <input
          onChange={() => setMenuOpen(!MenuOpen)}
          checked={MenuOpen}
          type="checkbox"
        />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      {MenuOpen ? (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed size-full bg-black bg-opacity-50 z-10 motion-preset-fade-lg"
        ></div>
      ) : null}
      <ul
        className={`md:hidden fixed right-0 h-screen w-1/2 bg-base-200 transition-all duration-500 ease-in-out translate-x-full ${
          MenuOpen ? "translate-x-1" : ""
        } p-10 flex flex-col justify-center gap-10 text-xl text-right z-20`}
      >
        {["Home", "Experience", "About", "Contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`group relative ${
                activeSection === section ? "text-primary" : ""
              } hover:text-primary transition-all`}
            >
              {section}
              <span
                className={`absolute left-0 bottom-0 w-full ${
                  activeSection === section ? "scale-100" : "scale-0"
                } h-[2px] transition-all bg-primary group-hover:scale-100`}
              />
            </a>
          </li>
        ))}

        <ThemeToggle />
      </ul>
      <ul className="hidden md:flex flex-col gap-8 fixed items-center m-5 -translate-y-1/2 top-1/2 py-5 px-3 border border-neutral rounded-full bg-transparent backdrop-blur-lg border-opacity-15 whitespace-nowrap shadow-xl -motion-translate-x-in-150 motion-duration-[2s] motion-delay-[5s] z-10">
        {Object.entries({
          Home: <FaHome style={{ height: "24px", width: "24px" }} />,
          Experience: <IoDocuments style={{ height: "24px", width: "24px" }} />,
          About: <FaPerson style={{ height: "24px", width: "24px" }} />,
          Contact: <FaAddressBook style={{ height: "24px", width: "24px" }} />,
        }).map((section) => (
          <li key={section[0]}>
            <a
              href={`#${section[0]}`}
              className={`group relative ${
                activeSection === section[0] ? "text-primary" : ""
              } hover:text-primary transition-all`}
            >
              {
                <div
                  className="tooltip tooltip-right px-1 tooltip-primary"
                  data-tip={section[0]}
                >
                  <div className="py-2">{section[1]}</div>
                </div>
              }
              <span
                className={`absolute left-0 bottom-0 w-full ${
                  activeSection === section[0] ? "scale-100" : "scale-0"
                } h-[2px] transition-all bg-primary group-hover:scale-100`}
              />
            </a>
          </li>
        ))}
        <div className="divider -my-2"></div>
        <ThemeToggle className="grid place-items-center" />
      </ul>
    </nav>
  );
}

export default Navbar;
