import React from "react";
import { CalendarClock, Dumbbell, Flame, Activity } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      time: "6:30 AM",
      title: "Morning Stretch",
      icon: Activity,
      color: "from-cyan-500 to-blue-500",
      note: "Loosen up your muscles before breakfast.",
    },
    {
      time: "8:00 AM",
      title: "Cardio Session",
      icon: Flame,
      color: "from-orange-500 to-pink-500",
      note: "Light jog and treadmill run — 30 minutes.",
    },
    {
      time: "6:00 PM",
      title: "Strength Training",
      icon: Dumbbell,
      color: "from-purple-500 to-pink-500",
      note: "Upper body focus — 45 minutes.",
    },
  ];

  return (
    <div className="p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-900">Today's Schedule</h1>
        <p className="text-gray-600 mt-1">
          Stay organized and stick to your fitness routine 📅
        </p>
      </div>

      {/* Schedule Cards */}
      <div className="space-y-6">
        {schedule.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div
                className={`bg-linear-to-br ${item.color} p-4 rounded-xl text-white flex items-center justify-center`}
              >
                <item.icon size={26} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.note}</p>
              </div>
            </div>
            <div className="text-right sm:text-center">
              <p className="text-sm text-gray-500">Time</p>
              <p className="text-lg font-semibold text-gray-800">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Footer */}
      <div className="mt-12 text-center bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white shadow-md">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CalendarClock size={24} />
          <h2 className="text-2xl font-semibold">Plan. Perform. Progress.</h2>
        </div>
        <p className="text-sm opacity-90">
          Consistency is key — make every session count!
        </p>
      </div>
    </div>
  );
};

export default Schedule;
