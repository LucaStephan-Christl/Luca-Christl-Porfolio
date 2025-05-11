"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "../ui/ThemeProvider";
import Image from "next/image";

function Work() {
  const { Theme } = useTheme();

  return (
    <div className="grid lg:grid-cols-2 place-items-center motion-preset-slide-left-sm motion-preset-focus-sm">
      <div className="">
        <div className="text-left">
          <div className="flex items-center gap-8">
            <a
              href="https://www.trihow.com/"
              target="_blank"
              className="xl:text-7xl text-4xl font-bold max-w-md"
            >
              Trihow AG
            </a>
            <div className="avatar hidden">
              <div className="w-32 rounded-full border-2 border-base-content relative">
                <Image
                  src="/images/trihow_logo.jpg"
                  alt="logo of Trihow AG"
                  layout="fill"
                  priority
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <p className="mb-4">(since October 2024)</p>
          <p className="max-w-md lg:max-w-xl md:text-start text-justify">
            I&apos;m currently working at a startup in Rotkreuz, Switzerland as
            a Working Student in Software Development. Trihow specializes in
            creating interactive solutions that merge physical elements with
            digital content to enhance customer experiences. We&apos;re using
            React.js and Electron.js to develop and maintain a Desktop and
            Web-App CMS that helps clients manage content for their products.
            For more information check out our{" "}
            <a className="link" href="https://www.trihow.com/" target="_blank">
              website
            </a>
            .
          </p>
        </div>
      </div>
      <DotLottieReact
        key={Theme}
        src={
          Theme === "sunset"
            ? "https://lottie.host/cc6f0a4e-5115-43d6-b3c0-dc6eb725ab80/19acOEo0z0.lottie"
            : "https://lottie.host/777cade0-c8b9-4292-9cef-fd567931c2b8/HoRwiTurJy.lottie"
        }
        loop
        autoplay
        className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
      />
    </div>
  );
}

export default Work;
