"use client";
import { useMyFit } from "@/src/hooks";
import MyActives from "./my-actives";
import FavoriteTraining from "./my-favorite-training";
import TrainingHistory from "./training-history";
import { SingleSkeletonCard, SkeletonCard } from "../../skeleton/Card";
import { IMyFit } from "@/src/interfaces/main/my-fit";

function MyFit() {
  const { data } = useMyFit();
  const myFit: IMyFit = data;
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
          <MyActives
            achievement={myFit?.achievement}
            healthHabits={myFit?.healthHabits}
          />
          <TrainingHistory histories={myFit?.getWatchedHistoryAsync} />
          <FavoriteTraining favs={myFit?.favoriteItems} />
        </>
      )}
    </div>
  );
}

export default MyFit;
