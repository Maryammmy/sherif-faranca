import { IFav } from "@/src/interfaces/main/my-fit";
import FavoriteTrainings from "./FavoriteTrainings";
import FavoriteTrainingHeader from "./Header";

interface IProps {
  favs: IFav[];
}
function FavoriteTraining({ favs }: IProps) {
  return (
    <div className="flex flex-col gap-5">
      <FavoriteTrainingHeader />
      <FavoriteTrainings favs={favs} />
    </div>
  );
}

export default FavoriteTraining;
