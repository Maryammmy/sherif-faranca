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
import { MoveLeft } from "lucide-react";
import Link from "next/link";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Calories = () => {
  return (
    <div className="max-w-7xl mx-auto padding-layout">
      <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
        <Link href="/my-fit">
          <MoveLeft className="size-6" />
        </Link>
        <header className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
            Calories
          </h1>
        </header>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TodayCalories />
        <WeeklySummary />
      </div>
    </div>
  );
};

export default Calories;
