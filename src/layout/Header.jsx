import React, { useMemo } from "react";
import { LayoutGrid, Search, Bell, Settings } from "lucide-react";

const Header = ({ setIsSidebarOpen }) => {
  const currentHour = new Date().getHours();

  const greeting = useMemo(() => {
    if (currentHour < 12) return "Good Morning 🌤️";
    if (currentHour < 18) return "Good Afternoon ☀️";
    if (currentHour < 22) return "Good Evening 🌇";
    return "Working Late? 🌙";
  }, [currentHour]);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <LayoutGrid size={24} />
          </button>

          {/* Greeting Section */}
          <div>
            <p className="text-sm text-gray-600">{greeting}</p>
            <h1 className="text-xl font-semibold text-gray-900">
              Welcome Back!
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-xl">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} className="text-gray-600 animate-slow-spin" />
          </button>
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-pink-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
