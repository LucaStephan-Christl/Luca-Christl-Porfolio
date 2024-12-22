import React from "react";

function Work() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="">
        <div className="text-left">
          <h2 className="text-4xl font-bold max-w-md">
            Working Student at Trihow AG
          </h2>
          <p className="mb-4">(since October 2024)</p>
          <p className="max-w-md">
            Currently I&apos;m working at a startup in Rotkreuz, Switzerland as
            a Working Student in Software Development. We&apos;re using React.js
            and Electron.js to develop and maintain a Desktop and Web-App CMS
            that helps users manage their Products. You can check out our
            Website{" "}
            <a
              className="link link-primary"
              href="https://www.trihow.com/"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="avatar">
        <div className="w-32 rounded-full outline">
          <img src="/images/trihow_logo.jpg" alt="picture of luca christl" />
        </div>
      </div>
    </div>
  );
}

export default Work;
