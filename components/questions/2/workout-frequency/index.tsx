"use client";
import { useEffect, useState } from "react";
import SelectWorkoutFrequency from "./SelectWorkoutFrequency";
import Shared from "@/components/questions/Shared";

function WorkoutFrequency() {
  const [selectedWorkoutTime, setSelectedWorkoutTime] = useState(4);

  useEffect(() => {
    const stored = sessionStorage.getItem("trainingPerWeek");
    if (stored) {
      setSelectedWorkoutTime(Number(stored));
    } else {
      // لو مفيش حاجة مخزنة، حط 4 في ال sessionStorage
      sessionStorage.setItem("trainingPerWeek", JSON.stringify(4));
    }
  }, []);
  const handleClickWorkoutTime = (val: number) => {
    setSelectedWorkoutTime(val);
    sessionStorage.setItem("trainingPerWeek", JSON.stringify(val));
  };
  return (
    <Shared
      progresses={[100, 66.66, 0]}
      title="how often you like to"
      coloredTitle="work out ?"
      content={
        <SelectWorkoutFrequency
          selectedWorkoutTime={selectedWorkoutTime}
          handleClickWorkoutTime={handleClickWorkoutTime}
        />
      }
      backHref="/questions/2/ideal-body-time"
      nextHref="/questions/2/injuries"
    />
  );
}

export default WorkoutFrequency;
