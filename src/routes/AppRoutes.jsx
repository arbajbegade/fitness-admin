import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import WorkOut from "../pages/WorkOut";
import DietPlan from "../pages/DietPlan";
import GoalsList from "../pages/GoalsList";
import Schedule from "../pages/Schedule";
import ProgressList from "../pages/ProgressList";
import PageNotFound from "../components/PageNotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workout" element={<WorkOut />} />
            <Route path="/diet" element={<DietPlan />} />
            <Route path="/goals" element={<GoalsList />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/progress" element={<ProgressList />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
};

export default AppRoutes;
