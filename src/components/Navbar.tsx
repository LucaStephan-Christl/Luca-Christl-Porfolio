import React from "react";
import { ThemeToggle } from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="z-10 fixed py-5 left-1/2 -translate-x-1/2">
      <ul className="backdrop-blur-xl py-5 px-8 rounded-full flex flex-row gap-8 items-center">
        <li>
          <a className="hover:text-primary" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-primary" href="#">
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
        <ThemeToggle classname="grid self-center" />
      </ul>
    </nav>
  );
}

export default Navbar;
