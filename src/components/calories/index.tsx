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
import { useMyFitCalories } from "@/src/hooks";
import Header from "./Header";
import { SingleSkeletonCard } from "../skeleton/Card";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Calories = () => {
  const { data } = useMyFitCalories();
  return (
    <div className="max-w-7xl mx-auto padding-layout">
      {!data ? (
        <div className="space-y-10">
          <SingleSkeletonCard className="h-10 w-1/2 md:w-1/3 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
            <SingleSkeletonCard className="rounded-full w-30 h-30 md:w-50 md:h-50 xl:w-60 xl:h-60" />
            <SingleSkeletonCard className="xl:h-[300px]" />
          </div>
        </div>
      ) : (
        <>
          {" "}
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <TodayCalories data={data?.data?.todayCalories} />
            <WeeklySummary data={data?.data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Calories;
