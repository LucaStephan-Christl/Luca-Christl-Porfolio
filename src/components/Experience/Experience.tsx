"use client";
import React, { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Section from "../ui/Section";

function Experience() {
  const [showEducation, setShowEducation] = useState(false);
  return (
    <Section
      title="Experience"
      id="Experience"
      className="intersect:motion-preset-focus-sm intersect-once intersect:motion-preset-slide-down-right-sm"
    >
      <div className="border rounded-xl border-white border-opacity-15 shadow-xl backdrop-blur-xl p-2">
        <div
          role="tablist"
          className="tabs tabs-boxed bg-opacity-0 grid grid-cols-2"
        >
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
        <div className="flex flex-col gap-16 p-8">
          {showEducation ? <Education /> : <Work />}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
