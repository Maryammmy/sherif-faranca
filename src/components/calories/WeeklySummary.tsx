import { ICalories } from "@/src/interfaces/main/my-fit";
import { Bar } from "react-chartjs-2";
import { format } from "date-fns";

interface IProps {
  data: ICalories;
}

const WeeklySummary = ({ data }: IProps) => {
  // labels من الداتا (هنجيب اليوم من التاريخ)
  const labels = data.dailyCalories.map(
    (d) => format(new Date(d.date), "EEE") // Mon, Tue, ...
  );

  // القيم بتاعة الكالوريز
  const caloriesData = data.dailyCalories.map((d) => d.calories);

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

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-semibold text-gray-700">Weekly Summary</h2>
      <p className="text-sm text-secondary font-medium">
        {format(new Date(data.dailyCalories[0].date), "MMM d")} -{" "}
        {format(
          new Date(data.dailyCalories[data.dailyCalories.length - 1].date),
          "MMM d"
        )}
      </p>
      <Bar data={barData} options={barOptions} />
      <p className="text-right text-gray-600 text-sm font-medium">
        {data.totalWeekCalories} calories
      </p>
    </div>
  );
};

export default WeeklySummary;
