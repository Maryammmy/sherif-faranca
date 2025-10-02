"use client";
import { useMyFit } from "@/src/hooks";
import MyActives from "./my-actives";
import FavoriteTraining from "./my-favorite-training";
import TrainingHistory from "./training-history";
import { SingleSkeletonCard, SkeletonCard } from "../../skeleton/Card";

function MyFit() {
  const { data } = useMyFit();
  console.log(data);
  return (
    <div className="flex flex-col gap-5">
      {!data ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 h-[300px]">
            <SingleSkeletonCard className="h-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SkeletonCard count={4} className="h-full" />
            </div>
          </div>
          <div>
            <div className="pb-5 max-w-md m-auto">
              <SingleSkeletonCard className="h-18" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              <SkeletonCard count={8} />
            </div>
          </div>
        </>
      ) : (
        <>
          <MyActives />
          <TrainingHistory />
          <FavoriteTraining />
        </>
      )}
    </div>
  );
}

export default MyFit;
