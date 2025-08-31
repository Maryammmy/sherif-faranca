"use client";
import { WorkoutHistoryTime } from "@/src/types/main/settings/account/workouts";
import WorkoutTimeFilters from "../main/settings/account/workouts/WorkoutTimeFilters";
import { useQueryParams } from "@/src/lib/utils";
import { useRouter } from "next/navigation";

function TrainingHistoryTime() {
  const { time = "today" } = useQueryParams();
  const router = useRouter();
  const handleSelectTime = (time: WorkoutHistoryTime) => {
    router.replace(`/training-history?time=${time}`);
  };
  return (
    <WorkoutTimeFilters
      selectedTime={time}
      handleSelectTime={handleSelectTime}
    />
  );
}

export default TrainingHistoryTime;
