// components/FoodTable.jsx
import React from 'react';

const FoodTable = () => {
  const foodData = [
    { icon: '🌯', name: 'Burrito', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', carbs: '20 gm' },
    { icon: '🍔', name: 'Burger', meal: 'Pizza Burger', status: 'Receiving', time: '01:00 AM', carbs: '20 gm' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Food</th>
            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Meal</th>
            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Calories</th>
            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Priorities</th>
            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Carbs</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-100 last:border-0">
              <td className="py-4 px-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-gray-900">{item.name}</span>
                </div>
              </td>
              <td className="py-4 px-2 text-sm text-gray-600">{item.meal}</td>
              <td className="py-4 px-2 text-sm text-gray-600">{item.status}</td>
              <td className="py-4 px-2 text-sm text-gray-600">{item.time}</td>
              <td className="py-4 px-2 text-sm text-gray-600">{item.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;