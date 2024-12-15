import React from "react";
import { ThemeToggle } from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="fixed py-5 left-1/2 -translate-x-1/2">
      <ul className="py-5 px-8 backdrop-blur-30 bg- rounded-full flex flex-row gap-8 items-center">
        <li>
          <a className="link link-hover" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="link link-hover" href="#">
            Experience
          </a>
        </li>
        <li>
          <a className="link link-hover" href="#">
            About Me
          </a>
        </li>
        <li>
          <a className="link link-hover" href="#">
            Contact
          </a>
        </li>
        <ThemeToggle classname="grid self-center" />
      </ul>
    </nav>
  );
}

export default Navbar;
