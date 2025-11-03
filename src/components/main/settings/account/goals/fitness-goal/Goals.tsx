"use client";

import FitnessGoalCard from "./Card";
import { Button } from "@/src/components/ui/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useGoals } from "@/src/hooks";
import { IQuestion } from "@/src/interfaces/questions";
import { SkeletonCard } from "@/src/components/skeleton/Card";
import { goalAPI } from "@/src/services/mutations/goals";
import toast from "react-hot-toast";
import Loader from "@/src/components/loader/Loader";

interface IProps {
  onClose: () => void;
}
function Goals({ onClose }: IProps) {
  const { data } = useGoals();
  const t = useTranslations("myGoal.fitnessGoalModal");
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const goals: IQuestion[] = data;
  const handleSelectGoal = (goal: number) => {
    setSelectedGoal(goal);
  };
  const changeTargetGoal = async () => {
    if (!selectedGoal) return;
    setLoading(true);
    const response = await goalAPI({ goalId: selectedGoal });
    if (response?.success) {
      toast.success(response.message);
      setTimeout(() => {
        onClose();
      }, 500);
    } else toast.error(response.message);
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-5 max-h-[70vh] overflow-y-auto sm:max-w-xs sm:mx-auto p-0.5">
      {!data ? (
        <div className="flex flex-col gap-5">
          <SkeletonCard count={2} className="h-40" />
        </div>
      ) : (
        <>
          {" "}
          {goals?.map((goal, index) => (
            <FitnessGoalCard
              key={index}
              goal={goal}
              selectedGoal={selectedGoal}
              handleSelectGoal={handleSelectGoal}
            />
          ))}
          <Button
            onClick={changeTargetGoal}
            className="bg-primary py-3 font-medium text-white rounded-md"
          >
            {loading ? <Loader /> : t("change")}
          </Button>
        </>
      )}
    </div>
  );
}

export default Goals;
