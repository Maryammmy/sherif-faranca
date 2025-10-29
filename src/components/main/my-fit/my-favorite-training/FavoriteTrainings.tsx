import { IFav } from "@/src/interfaces/main/my-fit";
import FavoriteTrainingCard from "./Card";
import { EmptyStateGrid } from "@/src/components/ui/empty-state/EmptyStateGrid";
import { useTranslations } from "next-intl";

interface IProps {
  favs: IFav[];
}
function FavoriteTrainings({ favs }: IProps) {
  const t = useTranslations("myFit.myFavoriteTraining");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {favs?.length ? (
        favs.map((fav) => <FavoriteTrainingCard key={fav?.id} fav={fav} />)
      ) : (
        <EmptyStateGrid message={t("noFavoriteTrainingFound")} />
      )}
    </div>
  );
}

export default FavoriteTrainings;
