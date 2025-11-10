// components/GoalChart.jsx
import React from 'react';

const GoalChart = () => {
  const chartData = [
    { day: 'Mon', workout: 60, calories: 80, steps: 90 },
    { day: 'Tue', workout: 40, calories: 45, steps: 50 },
    { day: 'Wed', workout: 100, calories: 95, steps: 80 },
    { day: 'Thu', workout: 95, calories: 55, steps: 90 },
    { day: 'Fri', workout: 30, calories: 60, steps: 70 },
    { day: 'Sat', workout: 70, calories: 75, steps: 80 },
    { day: 'Sun', workout: 25, calories: 85, steps: 95 }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Goal Progress</h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart Area */}
      <div className="h-64 flex items-end justify-between gap-4 mb-4">
        {chartData.map((data, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex items-end justify-center gap-1 h-48">
              <div 
                className="chart-bar-workout w-3 rounded-t-sm"
                style={{ height: `${data.workout}%` }}
              />
              <div 
                className="chart-bar-calories w-3 rounded-t-sm"
                style={{ height: `${data.calories}%` }}
              />
              <div 
                className="chart-bar-steps w-3 rounded-t-sm"
                style={{ height: `${data.steps}%` }}
              />
            </div>
            <span className="text-xs text-gray-600">{data.day}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full chart-bar-workout" />
          <span className="text-gray-600">Workout</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full chart-bar-calories" />
          <span className="text-gray-600">Calories</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full chart-bar-steps" />
          <span className="text-gray-600">Steps</span>
        </div>
      </div>
    </div>
  );
};

export default GoalChart;