"use client";
import { useState } from "react";
import FitnessGoal from "../fitness-goal";
import WeightGoal from "../weight-goal";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { useMyGoals } from "@/src/hooks";
import { IMyGoal } from "@/src/interfaces/main/settings/account/goals";
import Link from "next/link";
import { SkeletonCard } from "@/src/components/skeleton/Card";

function Goals() {
  const t = useTranslations("myGoal");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;
  const { data } = useMyGoals();
  const [weightGoalOpen, setWeightGoalOpen] = useState(false);
  const [fitnessGoalOpen, setFitnessGoalOpen] = useState(false);
  const myGoal: IMyGoal = data?.data;
  return (
    <>
      <div className="flex flex-col gap-2 px-3">
        {!data ? (
          <SkeletonCard count={3} className="h-10" />
        ) : (
          <>
            {" "}
            <Link
              href="/settings/account/goals/step"
              className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
            >
              <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
                {t("stepGoal")}
              </h3>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
                <span>
                  {myGoal?.stepGoals} {t("steps")}
                </span>
                <ChevronIcon className="size-4" />
              </div>
            </Link>
            <Button
              onClick={() => setWeightGoalOpen(true)}
              className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
            >
              <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
                {t("weightGoal")}
              </h3>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
                <span>
                  {myGoal?.targetWeight} {t("kg")}
                </span>
                <ChevronIcon className="size-4" />
              </div>
            </Button>
            <Button
              onClick={() => setFitnessGoalOpen(true)}
              className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
            >
              <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
                {t("fitnessGoal")}
              </h3>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
                <span>{myGoal?.fitnessGoal}</span>
                <ChevronIcon className="size-4" />
              </div>
            </Button>
          </>
        )}
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
