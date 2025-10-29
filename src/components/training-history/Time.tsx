"use client";
import { WorkoutHistoryTime } from "@/src/types/main/settings/account/workouts";
import WorkoutTimeFilters from "../main/settings/account/workouts/WorkoutTimeFilters";
import { useQueryParams } from "@/src/lib/utils";
import { useRouter } from "@/src/i18n/navigation";
import TrainingHistories from "./TrainingHistories";
import { useHistoryTraining } from "@/src/hooks/historyTraining";

function TrainingHistoryTime() {
  const { time = "today" } = useQueryParams();
  const { data } = useHistoryTraining(time);
  const trainingHistories = data?.data;
  const router = useRouter();
  const handleSelectTime = (time: WorkoutHistoryTime) => {
    router.replace(`/training-history?time=${time}`);
  };
  console.log(data);
  return (
    <>
      {" "}
      <WorkoutTimeFilters
        selectedTime={time}
        handleSelectTime={handleSelectTime}
      />
      <TrainingHistories trainingHistories={trainingHistories} />
    </>
  );
}

export default TrainingHistoryTime;
