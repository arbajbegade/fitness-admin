// components/Goals.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Goals = () => {
  const goalsData = [
    { title: 'ABS & Stretch', date: 'Saturday, April 14 | 08:00 AM', detail: '30 Min/day' },
    { title: 'Push Up', date: 'Sunday, April 15 | 08:00 AM', detail: '50 Sets/day' }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Goals</h3>
        <button className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {goalsData.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-4 shadow">
            <p className="text-sm font-medium text-gray-900 mb-1">{item.title}</p>
            <p className="text-xs text-gray-600 mb-2">{item.date}</p>
            <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full inline-block">
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;