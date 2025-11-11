import React from 'react';
import pic from "../assets/members.png";

const PromoCard = () => {
  return (
    <div className="bg-linear-to-b from-purple-500 to-purple-500/50 rounded-2xl p-6 text-white relative overflow-hidden h-48 lg:h-56">
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-2">50% off on Premium Membership</h3>
        <p className="text-sm text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
          Upgrade
        </button>
      </div>

      <img
        src={pic}
        alt="Members"
        className="absolute right-0 bottom-0 w-32 h-32 lg:w-40 lg:h-40 object-contain"
      />

      <div className="absolute right-12 bottom-4 w-24 h-24 bg-white/10 rounded-full" />
    </div>
  );
};

export default PromoCard;