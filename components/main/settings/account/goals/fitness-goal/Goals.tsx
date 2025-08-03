"use client";
import { goals } from "@/data/questions";
import FitnessGoalCard from "./Card";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

function Goals() {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const handleSelectGoal = (goal: string) => {
    setSelectedGoal(goal);
  };
  return (
    <div className="flex flex-col gap-5 max-h-[70vh] overflow-y-auto sm:max-w-xs sm:mx-auto p-0.5">
      {goals.map((goal, index) => (
        <FitnessGoalCard
          key={index}
          goal={goal}
          selectedGoal={selectedGoal}
          handleSelectGoal={handleSelectGoal}
        />
      ))}
      <Button className="bg-primary py-3 font-medium text-white rounded-md">
        Change
      </Button>
    </div>
  );
}

export default Goals;
