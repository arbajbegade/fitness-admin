import React from "react";
import { Dumbbell, Flame, Activity } from "lucide-react";

const WorkOut = () => {
    const workouts = [
        { name: "Morning Stretch", duration: "15 min", icon: Activity, color: "bg-cyan-500" },
        { name: "Cardio Blast", duration: "30 min", icon: Flame, color: "bg-orange-500" },
        { name: "Strength Training", duration: "45 min", icon: Dumbbell, color: "bg-pink-500" },
    ];

    return (
        <div className="p-6 overflow-y-auto">
            <div className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Today's Workout Plan</h1>
                <p className="text-gray-600 mt-1">
                    Stay consistent and push your limits 💪
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {workouts.map((workout, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`${workout.color} p-4 rounded-xl text-white flex items-center justify-center`}
                            >
                                <workout.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {workout.name}
                                </h3>
                                <p className="text-sm text-gray-500">{workout.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Keep Moving Forward</h2>
                <p className="text-sm opacity-90">
                    Every rep, every step, every drop of sweat counts. You’re doing amazing! 🚀
                </p>
            </div>
        </div>
    );
};

export default WorkOut;
