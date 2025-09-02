"use client";
import { useMyFitFav } from "@/src/hooks";
import FavoriteTrainingCard from "./Card";
import { IFav } from "@/src/interfaces/fav";

function FavoriteTrainings() {
  const { data } = useMyFitFav();
  const favs: IFav[] = data;
  if (!data) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
      {favs?.map((fav) => (
        <FavoriteTrainingCard key={fav?.id} fav={fav} />
      ))}
    </div>
  );
}

export default FavoriteTrainings;
