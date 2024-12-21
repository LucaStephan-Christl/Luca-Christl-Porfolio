import React from "react";

function Hero() {
  return (
    <div id="#Hero" className="hero min-h-screen">
      <div className="hero-content flex-col text-center">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-32 rounded-full outline">
              <img src="/images/profilepic.jpg" alt="picture of luca christl" />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold">Luca Christl</h2>
            <p>based in Aargau, Switzerland</p>
          </div>
        </div>
        <div className="flex flex-col font-bold text-7xl lg:text-9xl">
          <span className="">Frontend</span>
          <span className="">Developer</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
