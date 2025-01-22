import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "../ui/ThemeProvider";

function Work() {
  const { Theme } = useTheme();
  return (
    <div className="flex flex-col md:flex-row justify-between items-center motion-preset-slide-left-lg motion-preset-focus-lg">
      <div className="">
        <div className="text-left">
          <a
            href="https://www.trihow.com/"
            target="_blank"
            className="xl:text-7xl text-4xl font-bold max-w-md"
          >
            Trihow AG
          </a>
          <p className="mb-4">(since October 2024)</p>
          <p className="max-w-md lg:max-w-xl">
            Currently I&apos;m working at a startup in Rotkreuz, Switzerland as
            a Working Student in Software Development. We&apos;re using React.js
            and Electron.js to develop and maintain a Desktop and Web-App CMS
            that helps users manage their Products.
          </p>
        </div>
      </div>
      {Theme === "sunset" ? (
        <DotLottieReact
          src="https://lottie.host/cc6f0a4e-5115-43d6-b3c0-dc6eb725ab80/19acOEo0z0.lottie"
          loop
          autoplay
          className="max-w-xl"
        />
      ) : (
        <DotLottieReact
          src="https://lottie.host/777cade0-c8b9-4292-9cef-fd567931c2b8/HoRwiTurJy.lottie"
          loop
          autoplay
          className="max-w-xl"
        />
      )}
    </div>
  );
}

export default Work;
