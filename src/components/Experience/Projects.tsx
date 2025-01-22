import React from "react";
import Section from "../ui/Section";

function Projects() {
  return (
    <Section title="Projects" id="Experience">
      <div className="grid gap-8 opacity-0 xl:grid-cols-3 lg:grid-cols-2 intersect-once intersect:motion-opacity-out-100">
        <div className="card xl:col-span-2 bg-base-200 shadow-xl intersect-once motion-duration-[1s] motion-ease-in-out intersect:-motion-translate-x-in-75 intersect:motion-preset-focus-md">
          <figure className="bg-[#FFEAEA]">
            <img
              className="xl:h-60"
              src="/images/LOGO.svg"
              alt="frau-schoen.com"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Frau Schön Homepage</h2>
            <div className="flex gap-2 flex-wrap">
              <div className="badge badge-secondary">Sqaurespace</div>
              <div className="badge badge-error">Figma</div>
            </div>
            <p className="">
              I developed and created a Homepage for a Beauty-Business. Using
              Figma to create a new Corporate Design, I worked together closely
              with the client to directly incorporate feedback and implemented
              their desires using Squarespace.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://frau-schoen.com/"
                target="_blank"
                className="btn btn-primary"
              >
                Check it out!
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl intersect-once motion-delay-[0.2s] motion-duration-[1s] motion-ease-in-out intersect:motion-translate-x-in-75 intersect:motion-preset-focus-md">
          <figure>
            <img
              className="h-full"
              src="/images/login.png"
              alt="scrabble-sopra"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Scrabble Online</h2>
            <div className="flex gap-2 flex-wrap">
              <div className="badge badge-primary">React.js</div>
              <div className="badge badge-success">Springboot</div>

              <div className="badge badge-error">Figma</div>
            </div>
            <p>
              Together with 3 other Students, I developed a online Scrabble
              game, that you can play with your friends. The game works in
              realtime with a lobby system and profiles where you can add your
              friends. Feel free to check it out!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://sopra-fs24-group-24-client.oa.r.appspot.com/login"
                target="_blank"
                className="btn btn-primary"
              >
                Check it out!
              </a>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-200 shadow-xl xl:col-span-3 lg:col-span-2 motion-delay-[0.1s] intersect-once motion-duration-[1s] motion-ease-in-out intersect:-motion-translate-x-in-75 intersect:motion-preset-focus-md">
          <figure className="">
            <img
              className="h-full"
              src="/images/Portfolio.PNG"
              alt="personal portfolio site"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Personal Portfolio Website</h2>
            <div className="flex gap-2 flex-wrap">
              <div className="badge badge-accent">Next.js</div>
              <div className="badge badge-warning">Tailwind CSS</div>
              <div className="badge badge-error">Figma</div>
            </div>
            <p className="max-w-4xl">
              This is the Site your currently viewing. I wanted to create a
              personal Portfolio website using Next.js, to collect my
              experiences and projects. Also I want to give some further
              background on my education and who I am.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/LucaStephan-Christl/portfolio"
                target="_blank"
                className="btn btn-primary"
              >
                See Github!
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
