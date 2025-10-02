import TrainingHistories from "./TrainingHistories";
import TrainingHistoryHeader from "./Header";
import WorkoutTimeFilters from "../../settings/account/workouts/WorkoutTimeFilters";
import { useState } from "react";

function TrainingHistory() {
  const [selectedTime, setSelectedTime] = useState("today");
  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <div className="flex flex-col gap-5">
      <TrainingHistoryHeader />
      <WorkoutTimeFilters
        selectedTime={selectedTime}
        handleSelectTime={handleSelectTime}
      />
      <TrainingHistories />
    </div>
  );
}

export default TrainingHistory;
