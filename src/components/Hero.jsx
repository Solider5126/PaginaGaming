import React from "react";

const Hero = () => {
  return (
    <section className="h-[90vh]">
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
