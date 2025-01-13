"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";

function Background() {
  const { Theme } = useTheme();
  return Theme === "sunset" ? (
    <div>
      <div className="fixed -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square h-full bg-[radial-gradient(circle,rgba(255,134,91,0.1)_0%,rgba(255,255,255,0.00)_40%)] -motion-translate-y-out-25 -motion-translate-x-out-50 motion-ease-in-out motion-duration-[10s]"></div>
      <div className="fixed -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square h-full bg-[radial-gradient(circle,rgba(252,111,156,0.2)_0%,rgba(255,255,255,0.00)_50%)] -motion-translate-y-out-[36%] motion-translate-x-out-50 motion-duration-[10s] motion-ease-in-out motion-delay-[2s]"></div>
      <div className="fixed -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square h-full bg-[radial-gradient(circle,rgba(179,135,249,0.2)_0%,rgba(255,255,255,0.00)_70%)] motion-translate-y-out-25 -motion-translate-x-out-[13%] motion-duration-[10s] motion-ease-in-out"></div>
    </div>
  ) : null;
}

export default Background;
