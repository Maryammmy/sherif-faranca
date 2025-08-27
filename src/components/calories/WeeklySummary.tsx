import { Bar } from "react-chartjs-2";

const WeeklySummary = () => {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calories Burnt",
        data: [450, 700, 400, 2500, 600, 800, 500],
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
      <p className="text-sm text-secondary font-medium">May 4 - May 10</p>
      <Bar data={barData} options={barOptions} />
      <p className="text-right text-gray-600 text-sm font-medium">
        7500 calories
      </p>
    </div>
  );
};

export default WeeklySummary;
