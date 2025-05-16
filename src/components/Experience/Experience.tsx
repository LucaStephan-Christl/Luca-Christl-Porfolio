"use client";
import React, { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Section from "../ui/Section";

function Experience() {
  const [showEducation, setShowEducation] = useState(false);
  return (
    <Section id="Experience" className="">
      <div className="backdrop-blur-xl p-2 overflow-hidden">
        <div role="tablist" className="tabs tabs-boxed grid grid-cols-2">
          <button
            role="tab"
            className={`tab ${
              showEducation ? "transition-all hover:text-primary" : "tab-active"
            } text-lg`}
            onClick={() => {
              setShowEducation(false);
            }}
          >
            Work
          </button>
          <button
            role="tab"
            className={`tab ${
              !showEducation
                ? "transition-all hover:text-primary"
                : "tab-active"
            } text-lg`}
            onClick={() => {
              setShowEducation(true);
            }}
          >
            Education
          </button>
        </div>
        <div className="px-4 py-8 sm:px-0">
          {showEducation ? <Education /> : <Work />}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
