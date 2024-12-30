"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ Theme: "sunset", toggleTheme: () => {} });

export const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [Theme, setTheme] = useState("sunset");

  const toggleTheme = () => {
    const newTheme = Theme === "sunset" ? "cupcake" : "sunset";
    setTheme(newTheme);
    // Store the new theme in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };
  useEffect(() => {
    // Access localStorage only on the client side
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", Theme);
    }
  }, [Theme]);

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
