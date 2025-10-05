import TrainingHistories from "./TrainingHistories";
import TrainingHistoryHeader from "./Header";
import WorkoutTimeFilters from "../../settings/account/workouts/WorkoutTimeFilters";
import { useState } from "react";
import { IHistories } from "@/src/interfaces/main/my-fit";
import { WorkoutHistoryTime } from "@/src/types/main/settings/account/workouts";

interface IProps {
  histories: IHistories;
}

function TrainingHistory({ histories }: IProps) {
  const [selectedTime, setSelectedTime] = useState<WorkoutHistoryTime>("today");

  const handleSelectTime = (time: WorkoutHistoryTime) => {
    setSelectedTime(time);
  };
  const historyMap = {
    today: histories.daily,
    "this week": histories.weekly,
    "this month": histories.monthly,
  };

  const filteredHistory = historyMap[selectedTime];
  return (
    <div className="flex flex-col gap-5">
      <TrainingHistoryHeader />
      <WorkoutTimeFilters
        selectedTime={selectedTime}
        handleSelectTime={handleSelectTime}
      />
      {/* هنا بنمرر البيانات المناسبة */}
      <TrainingHistories trainingHistory={filteredHistory} />
    </div>
  );
}

export default TrainingHistory;
