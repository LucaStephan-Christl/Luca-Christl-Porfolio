"use client";
import React from "react";
import { useTheme } from "./ui/ThemeProvider";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero() {
  const { Theme } = useTheme();

  return (
    <div>
      <div className="absolute flex flex-col justify-center items-center inset-0 z-10 bg-base-300 -motion-translate-y-out-100 motion-duration-[1s] motion-delay-[2.5s] motion-ease-in-out">
        <DotLottieReact
          src={
            "https://lottie.host/1bfefe4b-4ce2-48de-a7e3-caa52831d1f7/A5ILFIuSRd.lottie"
          }
          autoplay
          className="lg:w-[500px] motion-preset-blur-down-md motion-preset-focus-lg motion-duration-[1s] motion-ease-in-out"
        />
        <h1 className="flex justify-center items-center min-w-min lg:gap-16 gap-8 text-5xl md:text-9xl overflow-hidden w-fit">
          <div className="motion-preset-slide-up-lg motion-duration-[1s] motion-ease-in-out ">
            Hi,✌🏻
          </div>
          <div className="motion-preset-slide-up-lg motion-duration-[1s] motion-delay-[0.125s] motion-ease-in-out">
            I&apos;m
          </div>
          <div className="motion-preset-slide-up-lg motion-duration-[1s] motion-delay-[0.25s] motion-ease-in-out">
            Luca
          </div>
        </h1>
      </div>
      <section id="Home" className={`hero min-h-dvh overflow-hidden`}>
        <div className="hero-content flex-col gap-16 text-center">
          <div className="flex items-center gap-4 motion-translate-y-in-100 motion-duration-[3s] motion-opacity-in-0 motion-delay-[2.5s] motion-ease-in-out">
            <div className="relative">
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
              {/* <div className="chat chat-end absolute top-0 left-0 -translate-x-full -translate-y-2/3 motion-preset-blur-left-md motion-preset-bounce motion-delay-[4s]">
                <div className="chat-bubble w-48 motion-preset-typewriter ">
                  Hi ✌🏻, this website is a work in progress. Have fun browsing!
                </div>
              </div> */}
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
              } motion-preset-focus-lg -motion-translate-x-in-50 motion-delay-[2.5s] motion-duration-[3s] motion-ease-in-out`}
            >
              Frontend
            </div>
            <div
              className={`font-light md:font-extrabold uppercase text-6xl md:text-9xl ${
                Theme === "sunset"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                  : "from-primary to-secondary"
              } motion-preset-focus-lg motion-translate-x-in-50 motion-delay-[3s] motion-duration-[3s] motion-ease-in-out`}
            >
              Developer
            </div>
          </div>
          <div className="relative transition-all ease-in-out group px-8 py-6 motion-preset-slide-up-lg motion-preset-focus-lg motion-delay-[2.5s] motion-duration-[2s] hover:scale-105">
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
    </div>
  );
}

export default Hero;
