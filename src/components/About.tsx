import React from "react";
import Section from "./ui/Section";
import ImageInspector from "./ui/ImageInspector";

function About() {
  return (
    <Section title="About Me" id="About">
      <div className="mockup-browser border-base-300 bg-base-200 border">
        <div className="mockup-browser-toolbar">
          <div className="input border-base-300 border">
            Who is Luca Christl ?
          </div>
        </div>
        <div className="border-base-300 grid grid-cols-3 gap-4 border-t px-16 py-16">
          <div className="flex-col col-span-2">
            <h4 className="text-xl font-bold underline">
              Student at University of Zurich
            </h4>
            <p>
              Currently Luca Christl is a student majoring in Software Systems.
            </p>
          </div>
          <div className="border-l-2 border-neutral pl-5">
            <h3 className="text-4xl font-bold mb-4">Luca Stephan Christl</h3>
            <div className="grid grid-cols-3 grid-rows-2 p-2 gap-1">
              <ImageInspector
                className="col-span-2 row-span-2"
                pathname="/images/photo1.jpeg"
              >
                <img
                  className="aspect-square object-cover"
                  src="/images/photo1.jpeg"
                ></img>
              </ImageInspector>
              <ImageInspector pathname="/images/profilepic.jpg">
                <img
                  className="aspect-square object-cover"
                  src="/images/profilepic.jpg"
                ></img>
              </ImageInspector>
              <ImageInspector pathname="images/profilepic.jpg">
                <img
                  className="aspect-square object-cover"
                  src="/images/profilepic.jpg"
                ></img>
              </ImageInspector>
            </div>
            <ul className="grid grid-cols-2 gap-5">
              <li key="age" className="stats shadow col-span-2">
                <div className="stat">
                  <div className="text-sm">Born:</div>
                  <div className="font-bold text-xl">
                    30.09.2001 (23 years old)
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
