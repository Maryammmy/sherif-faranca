"use client";
import { goals } from "@/src/data/main/settings/account/goals";
import GoalsPanelCard from "./Card";
import { useState } from "react";
import FitnessGoal from "../fitness-goal";
import WeightGoal from "../weight-goal";
import { useTranslations } from "next-intl";

function Goals() {
  const t = useTranslations("myGoal");
  const [weightGoalOpen, setWeightGoalOpen] = useState(false);
  const [fitnessGoalOpen, setFitnessGoalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 px-3">
        {goals.map((goal, index) => (
          <GoalsPanelCard
            key={index}
            goal={goal}
            {...(t(goal.label) === t("weightGoal") && {
              handleOpenWeightGoal: () => setWeightGoalOpen(true),
            })}
            {...(t(goal.label) === t("fitnessGoal") && {
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
