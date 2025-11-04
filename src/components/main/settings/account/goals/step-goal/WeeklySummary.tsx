import { IStep } from "@/src/interfaces/main/settings/account/goals";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import { useTranslations } from "next-intl";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "usehooks-ts";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

interface WeeklySummaryProps {
  data: IStep;
}

export default function WeeklySummary({ data }: WeeklySummaryProps) {
  const t = useTranslations("step.weeklySummary");
  const weeklyData = data?.weeklySummary || [];
  const isLarge = useMediaQuery("(min-width: 1280px)");

  const chartData = {
    labels: weeklyData?.map((d) => d.day),
    datasets: [
      {
        label: t("steps"),
        data: weeklyData.map((d) => d.steps),
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
    <div className="space-y-2">
      <h2 className="text-lg font-medium">{t("title")}</h2>
      <p className="text-sm font-medium text-secondary">{data?.weekRange}</p>
      <Bar data={chartData} options={chartOptions} height={200} />
      <p className="text-end text-gray-600 text-sm font-medium">
        {data?.weeklyTotal} {t("steps")}
      </p>
    </div>
  );
}
