"use client";
import { goals } from "@/src/data/main/settings/account/goals";
import GoalsPanelCard from "./Card";
import { useState } from "react";
import FitnessGoal from "../fitness-goal";
import WeightGoal from "../weight-goal";

function Goals() {
  // const [stepGoalOpen, setStepGoalOpen] = useState(false);
  const [weightGoalOpen, setWeightGoalOpen] = useState(false);
  const [fitnessGoalOpen, setFitnessGoalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 px-3">
        {goals.map((goal, index) => (
          <GoalsPanelCard
            key={index}
            goal={goal}
            {...(goal.label === "weight goal" && {
              handleOpenWeightGoal: () => setWeightGoalOpen(true),
            })}
            {...(goal.label === "fitness goal" && {
              handleOpenFitnessGoal: () => setFitnessGoalOpen(true),
            })}
          />
        ))}
      </div>
      <WeightGoal
        open={weightGoalOpen}
        onClose={() => setWeightGoalOpen(false)}
      />
      <FitnessGoal
        open={fitnessGoalOpen}
        onClose={() => setFitnessGoalOpen(false)}
      />
    </>
  );
}

export default Goals;
