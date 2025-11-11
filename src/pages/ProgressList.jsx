import React from "react";
import { Dumbbell, Flame, Activity } from "lucide-react";

const ProgressList = () => {
  const progressData = [
    {
      icon: Dumbbell,
      label: "Workout",
      value: "5 hrs",
      progress: 80,
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: Flame,
      label: "Calories Burned",
      value: "2300 kcal",
      progress: 65,
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Activity,
      label: "Steps",
      value: "12,500 steps",
      progress: 90,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="p-6 overflow-y-auto">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-900">Weekly Progress</h1>
        <p className="text-gray-600 mt-1">
          Keep tracking — progress is built step by step 📊
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {progressData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`bg-linear-to-br ${item.color} p-4 rounded-xl text-white flex items-center justify-center`}
              >
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500">{item.value}</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 bg-linear-to-r ${item.color}`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>

            <div className="mt-3 flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{item.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">You're Doing Great 💪</h2>
        <p className="text-sm opacity-90">
          Every bit of progress counts — consistency beats perfection.
        </p>
      </div>
    </div>
  );
};

export default ProgressList;
