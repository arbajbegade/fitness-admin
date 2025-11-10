import React from 'react';

const HeroCard = () => {
  return (
    <div className="bg-linear-to-r from-orange-500 to-orange-400 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-md">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3">Track Your Daily Activities</h2>
        <p className="text-white/90 text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-full">
        <div className="w-full h-full bg-linear-to-l from-orange-600/30 to-transparent rounded-full transform translate-x-1/4" />
      </div>
    </div>
  );
};

export default HeroCard;