"use client";
import TodayStepGoal from "./TodayStepGoal";
import WeeklySummary from "./WeeklySummary";
import Header from "./Header";
import { useStep } from "@/src/hooks";
import { SingleSkeletonCard } from "@/src/components/skeleton/Card";
import { IStep } from "@/src/interfaces/main/settings/account/goals";

export default function StepGoal() {
  const { data } = useStep();
  const step: IStep = data?.data;
  console.log(data);
  return (
    <div className="padding-layout">
      {!data ? (
        <div className="space-y-10">
          <SingleSkeletonCard className="h-10 w-1/2 md:w-1/3 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
            <SingleSkeletonCard className="rounded-full w-30 h-30 md:w-50 md:h-50 xl:w-60 xl:h-60" />
            <SingleSkeletonCard className="xl:h-[300px]" />
          </div>
        </div>
      ) : (
        <>
          {" "}
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <TodayStepGoal
              stepsToday={step?.todaySteps}
              stepTarget={step?.stepsGoal}
            />
            <WeeklySummary data={step} />
          </div>
        </>
      )}
    </div>
  );
}
