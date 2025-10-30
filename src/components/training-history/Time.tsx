"use client";

import { WorkoutHistoryTime } from "@/src/types/main/settings/account/workouts";
import WorkoutTimeFilters from "../main/settings/account/workouts/WorkoutTimeFilters";
import { cn, useQueryParams } from "@/src/lib/utils";
import { useRouter } from "@/src/i18n/navigation";
import TrainingHistories from "./TrainingHistories";
import { useMyFitTrainingHistory } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import Loader from "../loader/Loader";
import { useTranslations } from "next-intl";
import { Button } from "../ui/Button";
import { IWorkout } from "@/src/interfaces/main/settings/account/workouts";

function TrainingHistoryTime() {
  const t = useTranslations("myFit.myTrainingHistory");
  const { time = "today" } = useQueryParams();
  const router = useRouter();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMyFitTrainingHistory(time);

  const handleSelectTime = (time: WorkoutHistoryTime) => {
    router.replace(`/training-history?time=${time}`);
  };

  // Flatten all pages’ data
  const trainingHistories: IWorkout[] | undefined = data?.pages?.flatMap(
    (page) => page?.data?.items
  );
  console.log(data);
  return (
    <div className="space-y-4">
      {/* Filters */}
      <WorkoutTimeFilters
        selectedTime={time}
        handleSelectTime={handleSelectTime}
      />

      {/* Training History List */}
      {!data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-5 gap-5 pt-5">
          <SkeletonCard count={5} />
        </div>
      ) : (
        <TrainingHistories trainingHistories={trainingHistories} />
      )}

      {/* Show More Button */}
      {hasNextPage && (
        <div className="flex justify-center mt-4">
          <Button
            className={cn(
              "bg-primary hover:bg-primary/60 px-3 py-2 text-white font-medium rounded-md transition-all duration-300",
              isFetchingNextPage && "w-[106.7px] px-0"
            )}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? <Loader /> : t("showMore")}
          </Button>
        </div>
      )}
    </div>
  );
}

export default TrainingHistoryTime;
