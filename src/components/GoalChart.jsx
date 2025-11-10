// components/GoalChart.jsx
import React, { useState } from "react";
import Chart from "react-apexcharts";

const GoalChart = () => {
  const [period, setPeriod] = useState("Weekly");

  const chartData = [
    { day: "Mon", workout: 60, calories: 80, steps: 90 },
    { day: "Tue", workout: 40, calories: 45, steps: 50 },
    { day: "Wed", workout: 100, calories: 95, steps: 80 },
    { day: "Thu", workout: 95, calories: 55, steps: 90 },
    { day: "Fri", workout: 30, calories: 60, steps: 70 },
    { day: "Sat", workout: 70, calories: 75, steps: 80 },
    { day: "Sun", workout: 25, calories: 85, steps: 95 },
  ];

  const series = [
    {
      name: "Workout",
      data: chartData.map((d) => d.workout),
    },
    {
      name: "Calories",
      data: chartData.map((d) => d.calories),
    },
    {
      name: "Steps",
      data: chartData.map((d) => d.steps),
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["transparent"],
    },
    xaxis: {
      categories: chartData.map((d) => d.day),
      labels: { style: { colors: "#6b7280" } }, // Tailwind gray-500
    },
    yaxis: {
      labels: { style: { colors: "#6b7280" } },
    },
    fill: {
      opacity: 1,
      colors: ["#22d3ee", "#fb923c", "#a78bfa"], // your Tailwind colors (blue, amber, green)
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: { colors: "#4B5563" }, // Tailwind gray-600
      fontSize: "14px",
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 3,
    },
    tooltip: {
      theme: "light",
    },
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Goal Progress</h3>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700"
        >
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-72">
        <Chart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
};

export default GoalChart;
