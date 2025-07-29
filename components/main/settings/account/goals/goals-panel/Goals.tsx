"use client";
import { goals } from "@/data/main/settings/account/goals";
import GoalsPanelCard from "./Card";
import { useState } from "react";
import FitnessGoal from "../fitness-goal";
import WeightGoal from "../weight-goal";

function Goals() {
  const [fitnessGoalOpen, setFitnessGoalOpen] = useState(false);
  const [weightGoalOpen, setWeightGoalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-2 px-3">
        {goals.map((goal, index) => (
          <GoalsPanelCard
            key={index}
            goal={goal}
            {...(goal.label === "fitness goal" && {
              handleOpenFitnessGoal: () => setFitnessGoalOpen(true),
            })}
            {...(goal.label === "weight goal" && {
              handleOpenWeightGoal: () => setWeightGoalOpen(true),
            })}
          />
        ))}
      </div>
      <FitnessGoal
        open={fitnessGoalOpen}
        onClose={() => setFitnessGoalOpen(false)}
      />
      <WeightGoal
        open={weightGoalOpen}
        onClose={() => setWeightGoalOpen(false)}
      />
    </>
  );
}

export default Goals;
