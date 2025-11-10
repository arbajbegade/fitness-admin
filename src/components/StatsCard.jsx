import { Dumbbell, Flame, Activity } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    { icon: Dumbbell, label: 'Workout', value: '4 ms', color: 'bg-cyan-500' },
    { icon: Flame, label: 'Calories', value: '180 kcl', color: 'bg-orange-500' },
    { icon: Activity, label: 'Steps', value: '2200 steps', color: 'bg-purple-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className={`${stat.color} rounded-2xl p-6 text-white relative overflow-hidden`}>
          <div className="relative z-10">
            <stat.icon size={32} className="mb-3" />
            <p className="text-sm opacity-90 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
        </div>
      ))}
    </div>
  );
};

export default StatsCards;