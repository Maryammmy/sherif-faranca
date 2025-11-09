"use client";
import { useEffect, useState } from "react";
import SelectWorkoutTime from "./SelectWorkoutTime";
import Shared from "@/src/components/questions/Shared";
import { ISubQuestion } from "@/src/interfaces/questions";
import { useTranslations } from "next-intl";

interface IProps {
  workoutTimes: ISubQuestion[];
}
function WorkoutTime({ workoutTimes }: IProps) {
  const t = useTranslations("workoutTime");
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
      title={t("title")}
      coloredTitle={t("subTitle")}
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
