"use client";
import React, { useEffect } from "react";
import { useTheme } from "./ui/ThemeProvider";

function Hero() {
  const { Theme } = useTheme();
  // const disableScroll = () => {
  //   document.body.style.overflow = "hidden"; // Disable scrolling
  // };

  // const enableScroll = () => {
  //   document.body.style.overflow = ""; // Re-enable scrolling
  // };

  // const temporarilyDisableScroll = (duration: number) => {
  //   disableScroll();
  //   setTimeout(enableScroll, duration);
  // };

  // useEffect(() => {
  //   temporarilyDisableScroll(6000); // Disable scrolling for 3 seconds

  //   return enableScroll; // Cleanup to ensure scrolling is enabled when the component unmounts
  // }, []);

  return (
    <section
      id="Home"
      className={`hero min-h-screen overflow-hidden ${
        Theme === "sunset" ? "motion-bg-in-black" : "motion-bg-in-white"
      } motion-duration-[6s] motion-delay-[5s]`}
    >
      <div className="hero-content flex-col gap-16 text-center">
        <h1 className="absolute text-9xl opacity-0 motion-opacity-in-100 motion-delay-[3s]/opacity motion-duration-500/opacity motion-preset-slide-down-lg motion-preset-focus-lg motion-duration-[2s]">
          Hi ✌🏻, I&apos;m Luca
        </h1>
        <div className="flex items-center gap-4 motion-translate-y-in-100 motion-duration-[3s] motion-opacity-in-0 motion-delay-[4s] motion-ease-in-out">
          <div className="avatar">
            <div className="w-32 rounded-full border-2 border-base-content shadow-lg">
              <img src="/images/profilepic.jpg" alt="picture of luca christl" />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold">Luca Christl</h2>
            <p>based in Aargau, Switzerland</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className={`font-light md:font-extrabold uppercase text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r ${
              Theme === "sunset"
                ? "from-primary via-secondary to-accent"
                : "from-primary to-secondary"
            } motion-preset-focus-lg -motion-translate-x-in-50 motion-delay-[3s] motion-duration-[3s] motion-ease-in-out`}
          >
            Frontend
          </div>
          <div
            className={`font-light md:font-extrabold uppercase text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r ${
              Theme === "sunset"
                ? "from-primary via-secondary to-accent"
                : "from-primary to-secondary"
            } motion-preset-focus-lg motion-translate-x-in-50 motion-delay-[3.5s] motion-duration-[3s] motion-ease-in-out`}
          >
            Developer
          </div>
        </div>
        <div className="relative group px-8 py-6 motion-preset-slide-up-lg motion-preset-focus-lg motion-delay-[4s] motion-duration-[2s]">
          <div className="absolute transition-all duration-500 ease-in-out -inset-3 opacity-70 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-4"></div>
          <a
            href="#Contact"
            title="Get in touch!"
            className="bg-base-100 transition-all duration-500 text-lg px-8 py-6 font-bold rounded-2xl relative group-hover:text-primary"
            role="button"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
