"use client";
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

  const modal = isOpen ? (
    <div className="fixed cursor-zoom-out top-0 left-0 w-screen h-screen z-50 bg-black grid place-items-center bg-opacity-50">
      <img
        className="max-h-screen object-cover motion-preset-slide-down-md motion-preset-focus-sm"
        src={pathname}
        alt="Expanded"
      ></img>
    </div>
  ) : null;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${className} cursor-zoom-in hover:scale-110 transition-all hover:z-10`}
    >
      {isOpen && ReactDOM.createPortal(modal, document.body)}
      {children}
    </div>
  );
}

export default ImageInspector;
