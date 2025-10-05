import { IFav } from "@/src/interfaces/main/my-fit";
import FavoriteTrainingCard from "./Card";

interface IProps {
  favs: IFav[];
}
function FavoriteTrainings({ favs }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {favs.map((fav) => (
        <FavoriteTrainingCard key={fav?.id} fav={fav} />
      ))}
    </div>
  );
}

export default FavoriteTrainings;
