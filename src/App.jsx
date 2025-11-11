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
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
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

            <AppRoutes />
        </div>
      </div>
    </Router>
  )
}

export default App
