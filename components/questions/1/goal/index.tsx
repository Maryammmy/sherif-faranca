"use client";
import { IQuestion } from "@/interfaces/questions";
import SelectGoal from "./SelectGoal";
import Shared from "@/components/questions/Shared";
import { useEffect, useState } from "react";

interface IProps {
  goals: IQuestion[];
}
function Goal({ goals }: IProps) {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("goalId");
    if (stored) setSelectedGoal(Number(stored));
  }, []);
  const handleSelectGoal = (id: number) => {
    setSelectedGoal(id);
    sessionStorage.setItem("goalId", JSON.stringify(id));
  };
  return (
    <Shared
      progresses={[75, 0, 0]}
      title="What's your main"
      coloredTitle="goal ?"
      description="Your goal shapes your workout We'll tailor the best mix of cardio and strength training for you!"
      content={
        <SelectGoal
          goals={goals}
          selectedGoal={selectedGoal}
          handleSelectGoal={handleSelectGoal}
        />
      }
      backHref="/questions/1/bmi"
      nextHref="/questions/1/keep-fit"
      isNextDisabled={!selectedGoal}
    />
  );
}

export default Goal;
