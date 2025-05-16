import React from "react";
import Section from "../ui/Section";
import ImageInspector from "../ui/ImageInspector";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";

function About() {
  return (
    <Section title="About Me" id="About" className="">
      <div className="mockup-browser border-base-300 bg-base-200 border">
        <div className="mockup-browser-toolbar">
          <div className="input border-base-300 border">
            Who is Luca Christl ?
          </div>
        </div>
        <div className="border-base-300 justify-center flex flex-col xl:grid xl:grid-cols-3 grid-cols-1 gap-4 border-t xl:px-16 p-4">
          <div className="flex flex-col gap-4 xl:border-l-2 xl:border-neutral xl:pl-5 xl:col-start-3 xl:col-end-4">
            <div className="flex flex-col">
              <a
                href="https://www.linkedin.com/in/luca-christl-36a783308/"
                target="_blank"
                className="transition-all duration-300 hover:text-primary flex justify-between items-center"
              >
                <div
                  className="tooltip tooltip-top px-1 tooltip-primary"
                  data-tip="Checkout Linked-In"
                >
                  <h3 className="sm:text-4xl md:text-2xl text-2xl font-bold">
                    Luca Stephan Christl
                  </h3>
                </div>
                <IoIosArrowDroprightCircle className="w-6 h-6" />
              </a>

              <p className="sm:text-base opacity-60">
                Software/Frontend Developer
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-1">
              <ImageInspector
                className="col-span-2 row-span-2"
                pathname="/images/photo1.jpeg"
              >
                <Image
                  className="aspect-square object-cover"
                  src="/images/photo1.jpeg"
                  alt="picture of Luca Christl"
                  height={1000}
                  width={1000}
                  priority
                ></Image>
              </ImageInspector>
              <ImageInspector pathname="/images/profilepic.jpg">
                <Image
                  className="aspect-square object-cover"
                  src="/images/profilepic.jpg"
                  alt="picture of Luca Christl"
                  height={1000}
                  width={1000}
                  priority
                ></Image>
              </ImageInspector>
              <ImageInspector pathname="/images/snowboard.jpeg">
                <Image
                  className="aspect-square object-cover"
                  src="/images/snowboard.jpeg"
                  alt="picture of Luca Christl"
                  height={1000}
                  width={1000}
                  priority
                ></Image>
              </ImageInspector>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              <li key="description" className="stats shadow col-span-2">
                <div className="stat">
                  <div className="text-sm text-justify">
                    Luca Stephan Christl is a Student and Software Developer,
                    who loves learning new things in all aspects of life and
                    being creative.
                  </div>
                </div>
              </li>
              <li key="born" className="stats shadow">
                <div className="stat">
                  <div className="text-sm">Born</div>
                  <div className="font-bold text-base">
                    30.09.2001 in Germany
                  </div>
                </div>
              </li>
              <li key="died" className="stats shadow">
                <div className="stat">
                  <div className="text-sm">Languages</div>
                  <div className="font-bold text-base">German, English</div>
                </div>
              </li>
              <li key="interests" className="stats shadow col-span-2">
                <div className="stat">
                  <div className="text-sm">Interests</div>
                  <div className="font-bold text-base">
                    Coding, Volleyball, Gym, UI/UX
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col xl:col-start-1 xl:col-end-3 xl:row-start-1 gap-8">
            <div className="flex flex-col gap-2">
              <Link href="#" className="link link-hover text-xl font-bold">
                Student at the University of Zurich
              </Link>
              <p className="text-sm md:text-base opacity-60">
                Currently Luca is a 5th semester student majoring in Software
                Systems. He was born in Straubing, Germany and has been
                interested in technology all ...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Frequently asked questions</h3>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item bg-base-100 border-base-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    What sports does Luca play ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Luca&apos;s been going to the gym for the past few years
                      and recently joined a volleyball club. Also in winter he
                      is a huge fan if snowboarding.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item bg-base-100 border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    How did he get into Computer Science ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Luca&apos;s interest in computers and technology was
                      sparked early in his life when his dad brought home his
                      first computer when he was about 6. He started playing
                      videogames alot and thus has always been around
                      technology. Also his older brother and father both work in
                      the IT industry.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item bg-base-100 border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    What&apos;s his favourite show?
                  </div>
                  <div className="collapse-content">
                    <p>
                      His faviourite show is &quot;How I met your Mother&quot;,
                      since in his opinion it finds the perfect balance between
                      funny and serious moments and presents characters with a
                      lot of development and depth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#" className="link link-hover text-xl font-bold">
                Important Values
              </Link>
              <p className="text-sm md:text-base opacity-60">
                Luca most important values are being open minded in every aspect
                in life. This open mindedness goes hand in hand with his love
                for learning new things ...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#" className="link link-hover text-xl font-bold">
                Software Development
              </Link>
              <p className="text-sm md:text-base opacity-60">
                The best ways to combine creative thinking with problem solving
                skills and technology
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#" className="link link-hover text-xl font-bold">
                Goals
              </Link>
              <p className="text-sm md:text-base opacity-60">
                There are many things Luca still wants to do in his life
                regarding career but also personal development and experiences.
                One of his biggest dreams is to travel to Japan for some time
                and work remotely...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
