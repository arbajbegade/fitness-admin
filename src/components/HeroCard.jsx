import React from "react";
import pic from "../assets/hero.png";

const HeroCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow">
      {/* Orange to transparent gradient background */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-orange-400 to-transparent" />

      <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10">
        {/* Left Content */}
        <div className="relative z-10 max-w-md">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
            Track Your Daily Activities
          </h2>
          <p className="text-white text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        {/* Right Image - positioned absolutely to align to right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[45%]">
          <img
            src={pic}
            alt="Fitness Tracking"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
