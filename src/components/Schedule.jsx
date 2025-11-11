// components/Schedule.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Schedule = () => {
  const scheduleData = [
    { day: 'Monday', activity: 'Stretch', time: 'At 08:00', detail: '20 Sets', icon: '🧘‍♀️' },
    { day: 'Tuesday', activity: 'Back Stretch', time: 'At 08:00', detail: '10 Round', icon: '🏃‍♀️' },
    { day: 'Wednesday', activity: 'Yoga', time: 'At 08:00', detail: '30 min', icon: '🧘' }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">My Schedule</h3>
        <button className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {scheduleData.map((item, idx) => (
          <div key={idx} className='bg-white p-4 rounded-xl shadow' >
            <p className="text-sm font-semibold text-gray-900 mb-2">{item.day}</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{item.activity}</p>
                <p className="text-xs text-gray-600">{item.time}</p>
              </div>
              <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                {item.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;