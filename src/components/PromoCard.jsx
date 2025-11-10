// components/PromoCard.jsx
import React from 'react';

const PromoCard = () => {
  return (
    <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-2">50% off on Premium Membership</h3>
        <p className="text-sm text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
          Upgrade
        </button>
      </div>
      <div className="absolute right-4 bottom-4 w-24 h-24 bg-white/10 rounded-full" />
    </div>
  );
};

export default PromoCard;