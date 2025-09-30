"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "usehooks-ts";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

interface WeeklySummaryProps {
  weeklyData: { day: string; calories: number }[];
}

export default function WeeklySummary({ weeklyData }: WeeklySummaryProps) {
  const totalCalories = weeklyData.reduce((a, b) => a + b.calories, 0);
  const isLarge = useMediaQuery("(min-width: 1280px)");

  const chartData = {
    labels: weeklyData.map((d) => d.day),
    datasets: [
      {
        label: "Calories Burned",
        data: weeklyData.map((d) => d.calories),
        backgroundColor: "#6b21a8",
        borderRadius: 8,
        barThickness: isLarge ? 40 : 20, // responsive
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false }, ticks: { display: false } },
    },
  };

  return (
    <div className="">
      <h2 className="text-lg font-medium">Weekly Summary</h2>
      <p className="text-sm font-medium text-secondary mb-4">
        Calories Burned{" "}
        <span className="font-semibold">
          {(totalCalories / 1000).toFixed(1)}k
        </span>{" "}
        Kcal
      </p>
      <Bar data={chartData} options={chartOptions} height={200} />
    </div>
  );
}
