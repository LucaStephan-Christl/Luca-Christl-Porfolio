"use client";
import React from "react";
import { useTheme } from "./ui/ThemeProvider";
import Image from "next/image";

function Hero() {
  const { Theme } = useTheme();

  return (
    <section
      id="Home"
      className={`hero min-h-screen overflow-hidden ${
        Theme === "sunset" ? "motion-bg-in-black" : "motion-bg-in-white"
      } motion-duration-[3s] motion-delay-[5s]`}
    >
      <div className="hero-content flex-col gap-16 text-center">
        <h1 className="absolute text-9xl opacity-0 motion-opacity-in-100 motion-delay-[3s]/opacity motion-duration-500/opacity motion-preset-slide-down-lg motion-preset-focus-lg motion-duration-[2s]">
          Hi ✌🏻, I&apos;m Luca
        </h1>
        <div className="flex items-center gap-4 motion-translate-y-in-100 motion-duration-[3s] motion-opacity-in-0 motion-delay-[4s] motion-ease-in-out">
          <div className="avatar">
            <div className="w-32 rounded-full border-2 border-base-content shadow-l relative">
              <Image
                src="/images/profilepic_cartoon.jpg"
                alt="picture of luca christl"
                layout="fill"
                priority
                objectFit="cover"
              />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold">Luca Christl</h2>
            <p>based in Aargau, Switzerland</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className={`font-light md:font-extrabold uppercase text-6xl md:text-9xl ${
              Theme === "sunset"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                : "from-primary to-secondary"
            } motion-preset-focus-lg -motion-translate-x-in-50 motion-delay-[3s] motion-duration-[3s] motion-ease-in-out`}
          >
            Frontend
          </div>
          <div
            className={`font-light md:font-extrabold uppercase text-6xl md:text-9xl ${
              Theme === "sunset"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                : "from-primary to-secondary"
            } motion-preset-focus-lg motion-translate-x-in-50 motion-delay-[3.5s] motion-duration-[3s] motion-ease-in-out`}
          >
            Developer
          </div>
        </div>
        <div className="relative transition-all ease-in-out group px-8 py-6 motion-preset-slide-up-lg motion-preset-focus-lg motion-delay-[4s] motion-duration-[2s] hover:scale-105">
          <div
            className={`absolute transition-all duration-500 ease-in-out -inset-1 opacity-70 bg-gradient-to-r ${
              Theme === "sunset"
                ? "from-primary via-secondary to-accent"
                : "from-primary to-primary"
            } rounded-xl blur-2xl group-hover:opacity-100 group-hover:-inset-2`}
          ></div>
          <a
            href="#Contact"
            title="Get in touch!"
            className="bg-primary transition-all duration-500 text-lg px-8 py-6 font-bold rounded-2xl relative text-primary-content group-hover:scale-125"
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
