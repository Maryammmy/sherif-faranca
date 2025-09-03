"use client";
import { IFav } from "@/src/interfaces/fav";
import FavoriteTrainings from "./FavoriteTrainings";
import FavoriteTrainingHeader from "./Header";
import { useMyFitFav } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";

function FavoriteTraining() {
  const { data } = useMyFitFav();
  const favs: IFav[] = data;
  return (
    <div className="padding-layout">
      {!data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          <SkeletonCard count={10} />
        </div>
      ) : (
        <>
          <FavoriteTrainingHeader />
          <FavoriteTrainings favs={favs} />
        </>
      )}
    </div>
  );
}

export default FavoriteTraining;
