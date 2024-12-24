"use client";
import React, { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Section from "../ui/Section";

function Experience() {
  const [showEducation, setShowEducation] = useState(false);
  return (
    <Section title="Experience" id="Experience">
      <div className="bg-base-200 p-2 rounded-lg shadow-xl overflow-hidden">
        <div role="tablist" className="tabs tabs-boxed bg-base-100">
          <button
            role="tab"
            className={`tab ${
              showEducation
                ? ""
                : "tab-active motion-preset-fade-lg motion-preset-slide-left-lg"
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
                ? ""
                : "tab-active motion-preset-fade-lg motion-preset-slide-right-lg"
            } text-lg`}
            onClick={() => {
              setShowEducation(true);
            }}
          >
            Education
          </button>
        </div>
        <div className="flex flex-col gap-16 p-8">
          {showEducation ? <Education /> : <Work />}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
