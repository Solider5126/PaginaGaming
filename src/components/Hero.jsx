import React from "react";
import "../styles/body.css";

const Hero = () => {
  return (
    <section className="h-[90vh]">
      <div className="flex  h-20 justify-center items-center ">
        <h1 className="text-white text-center flex text-3xl mt-20 font-mono">
          ENJOY THE GAMES
        </h1>
      </div>
      <div className="flex h-15 justify-center items-center ">
        <h1 className="text-white text-center text-8xl mt-5 font-light capitalize">
          Epic games made for true gamers!
        </h1>
      </div>
      <div className="flex justify-center h-10 items-center">
        <button className="capitalize text-white justify-center bg-purple-400 p-4 rounded-lg mt-20">
          Join whit us
        </button>
      </div>
      <div className="absolute bottom-0 flex justify-center items-center w-full z-0">
        <img src="/src/images/hero-banner-bg.png" alt="Banner01" className="" />
      </div>
      <div className="absolute bottom-0 flex justify-center items-center w-full ">
        <img
          src="/src/images/hero-banner.png"
          alt="Banner02"
          className="z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
