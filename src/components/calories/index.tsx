"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import TodayCalories from "./TodayCalories";
import WeeklySummary from "./WeeklySummary";
import { useTotalCalories } from "@/src/hooks";
import Header from "./Header";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Calories = () => {
  const { data } = useTotalCalories();
  if (!data) return null;
  return (
    <div className="max-w-7xl mx-auto padding-layout">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TodayCalories data={data?.todayCalories} />
        <WeeklySummary data={data} />
      </div>
    </div>
  );
};

export default Calories;
