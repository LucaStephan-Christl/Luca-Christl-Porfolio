"use client";
import React, { useState } from "react";

function Experience() {
  const [showEducation, setShowEducation] = useState(false);
  return (
    <div id="#Experience" className="bg-base-200 p-2 rounded-lg">
      <div role="tablist" className="tabs tabs-boxed bg-base-100">
        <button
          role="tab"
          className={`tab ${showEducation ? "" : "tab-active"} text-lg`}
          onClick={() => {
            setShowEducation(false);
          }}
        >
          Experience
        </button>
        <button
          role="tab"
          className={`tab ${!showEducation ? "" : "tab-active"} text-lg`}
          onClick={() => {
            setShowEducation(true);
          }}
        >
          Education
        </button>
      </div>
      <div className="flex flex-col gap-16 p-8">
        <h2 className="text-4xl">
          {showEducation ? "My Education" : "My Working Experience"}
        </h2>
        {showEducation ? (
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2007-2010</time>
                <div className="text-lg font-black">
                  Primary School in Straubing, Germany
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2010-2013</time>
                <div className="text-lg font-black">
                  Primary School in Beckenried, Switzerland
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2013-2017</time>
                <div className="text-lg font-black">
                  Bezirksschule in Sins, Switzerland
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2017-2021</time>
                <div className="text-lg font-black">
                  Kantonsschule Wohlen in Switzerland
                </div>
                Due to my interest in science in general, when the time came, I
                chose my major subject to be mathematics and physics and later
                also Computer Science as an additional Subject, where I fell in
                love with it. Aswell as the final project in the Subject.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2021-2022</time>
                <div className="text-lg font-black">
                  Studying Computer Science at ETH Zurich
                </div>
                Due to more interest in coding, but the focus at ETH being a lot
                on the theoretical side and mathematics I later decided to
                switch to UZH.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2022-Now</time>
                <div className="text-lg font-black">
                  Bachelor in Computer Science at University of Zurich
                </div>
                My major being Software Systems with minor in Information
                Systems.
              </div>
            </li>
          </ul>
        ) : (
          <div className="flex justify-center items-center gap-8">
            <div className="">
              <div className="text-left">
                <h2 className="text-4xl font-bold">
                  Working Student at Trihow AG
                </h2>
                <p className="mb-4">(since October 2024)</p>
                <p className="max-w-md">
                  Currently I'm working at a startup in Rotkreuz, Switzerland as
                  a working Student in Software Development. We're using
                  React.js and Electron.js to develop and maintain a Desktop
                  aswell as Web-App CMS that helps users manage their Products.
                  You can check out our Website{" "}
                  <a
                    className="link link-primary link-hover"
                    href="https://www.trihow.com/"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="avatar">
              <div className="w-32 rounded-full outline">
                <img
                  src="/images/trihow_logo.jpg"
                  alt="picture of luca christl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
