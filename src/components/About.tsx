import React from "react";
import Section from "./ui/Section";

function About() {
  return (
    <section id="About">
      <div className="">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
              Software Developer
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-100 grid place-content-center text-9xl font-black">
              Frontend Developer
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
