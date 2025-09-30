import TodayStepGoal from "./TodayStepGoal";
import WeeklySummary from "./WeeklySummary";
import Header from "./Header";

export default function StepGoal() {
  const stepsToday = 1500;
  const stepTarget = 2500;

  const weeklyData = [
    { day: "Mon", calories: 3000 },
    { day: "Tue", calories: 3500 },
    { day: "Wed", calories: 2800 },
    { day: "Thu", calories: 5000 },
    { day: "Fri", calories: 3600 },
    { day: "Sat", calories: 3300 },
    { day: "Sun", calories: 3400 },
  ];
  return (
    <div className="padding-layout">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <TodayStepGoal stepsToday={stepsToday} stepTarget={stepTarget} />
        <WeeklySummary weeklyData={weeklyData} />
      </div>
    </div>
  );
}
