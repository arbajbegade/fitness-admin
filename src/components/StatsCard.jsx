import React from "react";
import { Dumbbell, Flame, Activity } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      icon: Dumbbell,
      label: "Workout",
      value: "4 ms",
      color: "bg-cyan-500",
      wave: (
        <path
          fill="white"
          fillOpacity="0.3"
          d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,165.3C840,181,960,235,1080,240C1200,245,1320,203,1380,181.3L1440,160V320H0Z"
        />
      ),
    },
    {
      icon: Flame,
      label: "Calories",
      value: "180 kcl",
      color: "bg-orange-500",
      wave: (
        <path
          fill="white"
          fillOpacity="0.3"
          d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128V320H0Z"
        />
      ),
    },
    {
      icon: Activity,
      label: "Steps",
      value: "2200 steps",
      color: "bg-purple-600",
      wave: (
        <path
          fill="white"
          fillOpacity="0.3"
          d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224V320H0Z"
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`${stat.color} relative rounded-2xl p-6 text-white overflow-hidden`}
        >
          {/* Wavy Background (unique per card) */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-70 animate-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            {stat.wave}
          </svg>

          {/* Foreground Content */}
          <div className="relative z-10">
            <stat.icon size={32} className="mb-3" />
            <p className="text-sm opacity-90 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>

          {/* Light overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-2xl" />
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
