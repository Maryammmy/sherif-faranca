import { useTranslations } from "next-intl";
import { Doughnut } from "react-chartjs-2";

interface IProps {
  data: number;
}
const TodayCalories = ({ data }: IProps) => {
  const t = useTranslations("calories.todayCalories");
  const todayCalories = data;

  const doughnutData = {
    labels: [t("running"), t("dancing"), t("workout"), t("yoga"), t("walking")],
    datasets: [
      {
        data: [400, 300, 450, 350, 342],
        backgroundColor: [
          "#f87171",
          "#facc15",
          "#fb923c",
          "#34d399",
          "#60a5fa",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">{t("title")}</h2>
      <div className="flex flex-col gap-1">
        <span className="text-secondary font-medium">{t("caloriesBurnt")}</span>
        <p className="text-gray-600 text-2xl font-bold">
          {todayCalories} {t("kcal")}
        </p>
      </div>
      <div className="w-60 mx-auto">
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
};

export default TodayCalories;
