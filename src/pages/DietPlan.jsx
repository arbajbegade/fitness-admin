import React from "react";
import { Coffee, Utensils, Sandwich, Apple } from "lucide-react";

const DietPlan = () => {
    const meals = [
        {
            name: "Breakfast",
            time: "8:00 AM",
            icon: Coffee,
            color: "bg-orange-500",
            items: ["Oatmeal with fruits", "Boiled eggs", "Green tea"],
        },
        {
            name: "Lunch",
            time: "1:00 PM",
            icon: Utensils,
            color: "bg-pink-500",
            items: ["Grilled chicken", "Brown rice", "Steamed veggies"],
        },
        {
            name: "Snack",
            time: "4:30 PM",
            icon: Apple,
            color: "bg-cyan-500",
            items: ["Apple slices", "Protein shake", "Handful of nuts"],
        },
        {
            name: "Dinner",
            time: "8:00 PM",
            icon: Sandwich,
            color: "bg-purple-600",
            items: ["Salmon fillet", "Quinoa", "Avocado salad"],
        },
    ];

    return (
        <div className="p-6 overflow-y-auto">
            <div className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Today's Diet Plan</h1>
                <p className="text-gray-600 mt-1">
                    Fuel your body with the right nutrition 🍽️
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {meals.map((meal, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className={`${meal.color} p-4 rounded-xl text-white flex items-center justify-center`}
                            >
                                <meal.icon size={26} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {meal.name}
                                </h3>
                                <p className="text-sm text-gray-500">{meal.time}</p>
                            </div>
                        </div>

                        <ul className="text-sm text-gray-700 space-y-1 pl-2 list-disc list-inside">
                            {meal.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Eat Clean, Stay Strong 💪</h2>
                <p className="text-sm opacity-90">
                    Consistency in diet fuels consistency in performance. Keep going!
                </p>
            </div>
        </div>
    );
};

export default DietPlan;
