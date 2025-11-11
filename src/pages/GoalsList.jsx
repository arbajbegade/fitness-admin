import React from "react";
import { Target, Trophy, HeartPulse } from "lucide-react";

const GoalsList = () => {
    const goals = [
        {
            icon: Target,
            name: "Lose Weight",
            progress: 70,
            color: "from-orange-500 to-pink-500",
        },
        {
            icon: HeartPulse,
            name: "Improve Stamina",
            progress: 45,
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: Trophy,
            name: "Gain Muscle",
            progress: 60,
            color: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <div className="p-6 overflow-y-auto">
            <div className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Your Fitness Goals</h1>
                <p className="text-gray-600 mt-1">
                    Track your progress and keep crushing your targets 🚀
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.map((goal, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className={`bg-linear-to-br ${goal.color} p-4 rounded-xl text-white flex items-center justify-center`}
                            >
                                <goal.icon size={28} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{goal.name}</h3>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                                className={`h-3 bg-linear-to-r ${goal.color}`}
                                style={{ width: `${goal.progress}%` }}
                            ></div>
                        </div>

                        <div className="mt-3 flex justify-between text-sm text-gray-600">
                            <span>Progress</span>
                            <span>{goal.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Keep Going Strong 💪</h2>
                <p className="text-sm opacity-90">
                    Progress takes patience — focus on growth, not perfection.
                </p>
            </div>
        </div>
    );
};

export default GoalsList;
