import React from "react";
import youtube from "../images/youtube.svg";
import twitch from "../images/twitch.svg";

const HeroBatles = () => {
  return (
    <>
      <div className="flex  mt-10 p justify-center items-center">
        <h1 className="text-xl uppercase text-white font-semibold">
          upcoming matches
        </h1>
      </div>
      <div className="flex  mt-10 p justify-center items-center">
        <h1 className="text-3xl uppercase text-white font-semibold">
          Battles extreme
        </h1>
      </div>
      <div className="flex  mt-1 p justify-center items-center">
        <h1 className="text-3xl uppercase text-white font-semibold">
          masters <strong className="text-purple-700">Tournament</strong>
        </h1>
      </div>
      <div className="flex  mt-10 p justify-center items-center">
        <p className="text-xs w-1/4 uppercase opacity-90 brightness-90 text-center text-white font-semibold">
          Our success is creating business solutions is due in large part to our
          talented and highly committed team.
        </p>
      </div>
      <div className="grid grid-cols-5 bg-white place-items-center">
        <div className="col-span-2 flex bg-gradient-to-r from-cyan-500 to-blue-500">
          <img className="" src="/src/images/team-logo-1.png" alt="logo1" />
          <div className="flex flex-col">
            <h1 className="uppercase text-6xl">Purple Death cadets</h1>
          </div>
          <div className="flex flex-col items">
            <p className="uppercase text-sm">group 04|match 06th</p>
          </div>
        </div>
        <div className="col-span-1 ">
          <h1 className="text-5xl font-bold text-center">10:00</h1>
          <h1 className="text-center mt-6">25TH May 2024</h1>
          <div className="flex justify-center mt-3 gap-4">
            <img className="w-6" src={youtube} alt="youtube" />
            <img className="w-6" src={twitch} alt="twitch" />
          </div>
        </div>
        <div className="col-span-2">
          <img src="/src/images/team-logo-2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroBatles;
