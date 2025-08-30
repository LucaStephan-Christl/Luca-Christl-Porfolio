"use client";
import React, { useState } from "react";
import Section from "../ui/Section";
import Image from "next/image";
import { useTheme } from "../ui/ThemeProvider";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, experience and contact information. I also used this as an opportunity to learn Next.js and TailwindCSS.",
    image: "/images/portfolio.PNG",
    tags: [
      <div key="next.js" className="badge badge-primary">
        Next.js
      </div>,
      <div key="TailwindCSS" className="badge badge-secondary">
        TailwindCSS
      </div>,
      <div key="Figma" className="badge badge-info">
        Figma
      </div>,
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Frau Schön Website",
    description:
      "I developed a website for a local beauty business, focusing on a clean and modern design. I also overhauled their branding to create a cohesive and professional look.",
    image: "/images/kerstin-christl.jpg",
    tags: [
      <div key="Squarespace" className="badge badge-accent">
        Squarespace
      </div>,
      <div key="Figma" className="badge badge-info">
        Figma
      </div>,
    ],
    link: "https://frau-schoen.com/",
  },
];

function Projects() {
  const [currentId, setcurrentId] = useState(1);
  const theme = useTheme();
  return (
    <Section title="Featured Projects" id="Experience">
      <div className="flex flex-col md:flex-row w-full gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group ${
              currentId == project.id ? "md:w-full h-[600px]" : "md:w-64 h-96"
            } md:h-[600px] overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300`}
            onClick={() => {
              if (currentId === project.id) {
                window.open(project.link, "_blank", "noopener,noreferrer");
                return;
              }
              setcurrentId(project.id);
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              objectPosition="top"
              className="object-cover transition-transform ease-in-out duration-300 group-hover:scale-110"
            />
            {/* Overlay */}
            {currentId === project.id && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex p-4">
                <div
                  className={`flex flex-col flex-grow gap-4 ${
                    theme.Theme === "sunset"
                      ? "text-base-content"
                      : "text-base-300"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold group-hover:motion-preset-blur-right-sm">
                      {project.title}
                    </h3>
                    <p className="text-sm motion-delay-100 group-hover:motion-preset-blur-right-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 motion-delay-100 group-hover:motion-preset-blur-right-sm">
                    {project.tags}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary self-end group-hover:motion-preset-blur-left-md"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
