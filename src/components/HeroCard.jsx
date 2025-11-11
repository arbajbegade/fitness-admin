import React from 'react';
import pic from "../assets/hero.png";

const HeroCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden flex shadow">
      
      {/* Left Side - Orange with Content */}
      <div className="bg-orange-500 p-6 lg:p-8 text-white flex-1 flex items-center">
        <div className="max-w-md">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Track Your Daily Activities</h2>
          <p className="text-white/90 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      
      {/* Right Side - Image with Gradient Overlay */}
      <div className="relative flex-1">
        <img 
          src={pic} 
          alt="Fitness Activity" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-transparent" />
      </div>
      
    </div>
  );
};

export default HeroCard;