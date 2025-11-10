// components/Header.jsx
import React from 'react';
import { LayoutGrid, Search, Bell, Settings } from 'lucide-react';

const Header = ({ setIsSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden text-gray-600"
            onClick={() => setIsSidebarOpen(prev => !prev)}
          >
            <LayoutGrid size={24} />
          </button>
          <div>
            <p className="text-sm text-gray-600">Good Morning</p>
            <h1 className="text-xl font-semibold text-gray-900">Welcome Back!</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64">
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
            <Settings size={20} className="text-gray-600" />
          </button>
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-pink-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;