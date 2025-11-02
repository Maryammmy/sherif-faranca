import { cn } from "@/src/lib/utils";
import FavoriteWorkoutCard from "./FavoriteCard";
import { useFavWorkouts, useWorkouts } from "@/src/hooks";
import {
  IFavWorkout,
  IWorkout,
} from "@/src/interfaces/main/settings/account/workouts";
import WorkoutCard from "./Card";
import { SkeletonCard } from "@/src/components/skeleton/Card";
import { EmptyStatePage } from "@/src/components/ui/empty-state/EmptyStatePage";
import { useTranslations } from "next-intl";

interface IProps {
  section: string;
  time: string;
}
function Workouts({ section, time }: IProps) {
  const t = useTranslations("workouts");
  const isFav = section === "favorite";
  const isRecent = section === "recent";
  const isHistory = section === "history";

  const { data } = useWorkouts(section, time);
  const { data: favData } = useFavWorkouts(section);

  const historyWorkouts: IWorkout[] = data?.data;
  const recentWorkouts: IWorkout[] = data;
  const favs: IFavWorkout[] = favData;
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5"
        // isFav && "place-items-center"
      )}
    >
      {isFav && (
        <>
          {!favData ? (
            <SkeletonCard count={5} className="h-[315px]" />
          ) : favs?.length ? (
            favs.map((fav) => <FavoriteWorkoutCard key={fav?.id} fav={fav} />)
          ) : (
            <EmptyStatePage message={t("noFavoriteWorkoutsFound")} />
          )}
        </>
      )}
      {isRecent && (
        <>
          {!data ? (
            <SkeletonCard count={5} className="h-[315px]" />
          ) : recentWorkouts?.length ? (
            recentWorkouts?.map((recent) => (
              <WorkoutCard key={recent?.id} workout={recent} />
            ))
          ) : (
            <EmptyStatePage message={t("noRecentWorkoutsFound")} />
          )}
        </>
      )}
      {isHistory && (
        <>
          {!data ? (
            <SkeletonCard count={5} className="h-[315px]" />
          ) : historyWorkouts?.length ? (
            historyWorkouts?.map((history) => (
              <WorkoutCard key={history?.id} workout={history} />
            ))
          ) : (
            <EmptyStatePage message={t("noHistoryWorkoutsFound")} />
          )}
        </>
      )}
    </div>
  );
}

export default Workouts;
