"use client";
import { useEffect, useState } from "react";
import SelectWorkoutTime from "./SelectWorkoutTime";
import Shared from "@/components/questions/Shared";
import { ISupQuestion } from "@/interfaces/questions";

interface IProps {
  workoutTimes: ISupQuestion[];
}
function WorkoutTime({ workoutTimes }: IProps) {
  const [selectedWorkoutTime, setSelectedWorkoutTime] = useState<number | null>(
    null
  );
  useEffect(() => {
    const stored = sessionStorage.getItem("workoutTimeId");
    if (stored) setSelectedWorkoutTime(Number(stored));
  }, []);
  const handleSelectWorkoutTime = (id: number) => {
    setSelectedWorkoutTime(id);
    sessionStorage.setItem("workoutTimeId", JSON.stringify(id));
  };
  return (
    <Shared
      progresses={[100, 100, 66.66]}
      title="What is best time for you to"
      coloredTitle="work out ?"
      content={
        <SelectWorkoutTime
          workoutTimes={workoutTimes}
          selectedWorkoutTime={selectedWorkoutTime}
          handleSelectWorkoutTime={handleSelectWorkoutTime}
        />
      }
      backHref="/questions/3/fitness-level"
      nextHref="/questions/3/music-preference"
    />
  );
}

export default WorkoutTime;
