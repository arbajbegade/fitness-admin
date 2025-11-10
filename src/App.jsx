import { useState } from 'react';
import './App.css'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import StatsCards from './components/StatsCard';
import HeroCard from './components/HeroCard';
import GoalChart from './components/GoalChart';
import FoodTable from './components/FoodTable';
import Schedule from './components/Schedule';
import Goals from './components/Goals';
import PromoCard from './components/PromoCard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <HeroCard />
              <StatsCards />
              <GoalChart />
              <FoodTable />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Schedule />
              <Goals />
              <PromoCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
