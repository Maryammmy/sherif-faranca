import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import FavoriteTrainingCard from "./Card";
import { IFav } from "@/src/interfaces/fav";

interface IProps {
  favs: IFav[];
}
function FavoriteTrainings({ favs }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
      {favs?.length ? (
        favs?.map((fav) => <FavoriteTrainingCard key={fav?.id} fav={fav} />)
      ) : (
        <EmptyStatePage message="No favorite trainings found" />
      )}
    </div>
  );
}

export default FavoriteTrainings;
