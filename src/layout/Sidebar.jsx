// components/Sidebar.jsx
import React from "react";
import {
  Dumbbell,
  LayoutGrid,
  Calendar,
  Target,
  BarChart3,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navItems = [
    { icon: LayoutGrid, label: "Overview", path: "/" },
    { icon: Dumbbell, label: "Workout", path: "/workout" },
    { icon: Calendar, label: "Diet Plan", path: "/diet" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: Calendar, label: "My Schedule", path: "/schedule" },
    { icon: BarChart3, label: "Progress", path: "/progress", hasArrow: true },
  ];

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 p-6">
          <Dumbbell className="text-orange-500" size={28} strokeWidth={2.5} />
          <span className="text-xl font-bold text-orange-500">Fitness</span>
        </div>
        <hr className="mx-4 h-1 mt-1 text-gray-200" />

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-[#FF6B2C] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              onClick={() => setIsSidebarOpen(false)} // auto close on mobile
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {item.hasArrow && <ChevronRight size={16} className="ml-auto" />}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Nav */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <NavLink
            to="/help"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <HelpCircle size={20} />
            <span>Help</span>
          </NavLink>
          <NavLink
            to="/logout"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
