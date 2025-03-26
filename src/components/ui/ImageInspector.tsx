"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function ImageInspector({
  pathname,
  children,
  className,
}: {
  className?: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const modal = isOpen ? (
    <div className="fixed cursor-zoom-out top-0 left-0 w-screen h-screen z-50 bg-black grid place-items-center bg-opacity-50">
      {isLoading && (
        <div className="absolute z-50">
          <DotLottieReact
            src="https://lottie.host/f89e5320-876d-43dc-8abd-617b16a5392f/LnbZNE6LXN.lottie"
            loop
            autoplay
            width={"100px"}
            height={"100px"}
          />
        </div>
      )}
      <Image
        className="motion-preset-slide-down-md motion-preset-focus-sm"
        src={pathname}
        alt="Expanded"
        width={500}
        height={0}
        priority
        quality={100}
        onLoadingComplete={() => {
          setisLoading(false);
        }}
      ></Image>
    </div>
  ) : null;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${className} cursor-zoom-in md:hover:scale-110 transition-all md:hover:z-10`}
    >
      {isOpen && ReactDOM.createPortal(modal, document.body)}
      {children}
    </div>
  );
}

export default ImageInspector;
