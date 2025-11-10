// components/Sidebar.jsx
import React from 'react';
import { Dumbbell, LayoutGrid, Calendar, Target, BarChart3, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navItems = [
    { icon: LayoutGrid, label: 'Overview', active: true },
    { icon: Dumbbell, label: 'Workout' },
    { icon: Calendar, label: 'Diet Plan' },
    { icon: Target, label: 'Goals' },
    { icon: Calendar, label: 'My Schedule' },
    { icon: BarChart3, label: 'Progress', hasArrow: true },
  ];

  return (
    <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 p-6 border-b border-gray-200">
          <Dumbbell className="text-orange-500" size={28} strokeWidth={2.5} />
          <span className="text-xl font-bold text-orange-500">Fitness</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                item.active
                  ? 'sidebar-active'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {item.hasArrow && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>

        {/* Bottom Nav */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <HelpCircle size={20} />
            <span>Help</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;