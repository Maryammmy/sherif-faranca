"use client";
import { goals } from "@/src/data/questions";
import FitnessGoalCard from "./Card";
import { Button } from "@/src/components/ui/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";

function Goals() {
  const t = useTranslations("myGoal.fitnessGoalModal");
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
        {t("change")}
      </Button>
    </div>
  );
}

export default Goals;
