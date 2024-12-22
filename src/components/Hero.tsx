import React from "react";

function Hero() {
  return (
    <section id="Home" className="hero min-h-screen">
      <div className="hero-content flex-col gap-8 text-center">
        <div className="flex items-center gap-4">
          <div className="avatar transition-all hover:scale-110">
            <div className="w-32 rounded-full border-2 border-base-content shadow-lg">
              <img src="/images/profilepic.jpg" alt="picture of luca christl" />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold">Luca Christl</h2>
            <p>based in Aargau, Switzerland</p>
          </div>
        </div>
        <div className="font-serif flex text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent element-to-rotate">
          Frontend Developer
        </div>
      </div>
    </section>
  );
}

export default Hero;
