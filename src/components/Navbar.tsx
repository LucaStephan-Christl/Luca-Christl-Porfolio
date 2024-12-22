"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";

function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <label className="md:hidden btn btn-circle swap swap-rotate fixed top-5 right-5 z-20">
        {/* this hidden checkbox controls the state */}
        <input onChange={() => setMenuOpen(!MenuOpen)} type="checkbox" />

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
      {
        <ul
          className={`md:hidden fixed right-0 h-screen w-1/2 bg-base-200 ${
            MenuOpen
              ? "motion-translate-x-in-100"
              : "motion-translate-x-out-100"
          } p-10 flex flex-col justify-center gap-10 text-xl text-right z-10`}
        >
          <li>
            <a className="hover:text-primary" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#Experience">
              Experience
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#">
              About Me
            </a>
          </li>
          <li>
            <a className="hover:text-primary" href="#">
              Contact
            </a>
          </li>
          <ThemeToggle classname="" />
        </ul>
      }
      <ul className="hidden md:flex gap-8 fixed items-center m-5 -translate-x-1/2 left-1/2  py-5 px-8 border border-neutral rounded-full bg-transparent backdrop-blur-xl z-20 border-opacity-15 whitespace-nowrap shadow-xl">
        <li>
          <a className="hover:text-primary" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-primary" href="#Experience">
            Experience
          </a>
        </li>
        <li>
          <a className="hover:text-primary" href="#">
            About Me
          </a>
        </li>
        <li>
          <a className="hover:text-primary" href="#">
            Contact
          </a>
        </li>
        <ThemeToggle classname="" />
      </ul>
    </nav>
  );
}

export default Navbar;
