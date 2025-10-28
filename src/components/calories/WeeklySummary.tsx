import { ICalories } from "@/src/interfaces/main/my-fit";
import { Bar } from "react-chartjs-2";

interface IProps {
  data: ICalories;
}

const WeeklySummary = ({ data }: IProps) => {
  // 🏷️ الأيام (labels)
  const labels = data?.weeklySummary?.map((d) => d?.day);

  // 🔥 القيم (عدد الكالوريز)
  const caloriesData = data?.weeklySummary?.map((d) => d?.calories);

  // 📊 إعدادات البيانات
  const barData = {
    labels,
    datasets: [
      {
        label: "Calories Burnt",
        data: caloriesData,
        backgroundColor: "#3e1492",
      },
    ],
  };

  // ⚙️ إعدادات الشارت
  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-semibold text-gray-700">Weekly Summary</h2>
      <p className="text-sm text-secondary font-medium">{data?.weekRange}</p>

      <Bar data={barData} options={barOptions} />

      <p className="text-right text-gray-600 text-sm font-medium">
        {data?.weeklyTotal} calories
      </p>
    </div>
  );
};

export default WeeklySummary;
