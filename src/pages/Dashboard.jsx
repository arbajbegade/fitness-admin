import React from 'react'
import HeroCard from '../components/HeroCard'
import StatsCards from '../components/StatsCard'
import GoalChart from '../components/GoalChart'
import FoodTable from '../components/FoodTable'
import Schedule from '../components/Schedule'
import Goals from '../components/Goals'
import PromoCard from '../components/PromoCard'

const Dashboard = () => {
    return (
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
    )
}

export default Dashboard