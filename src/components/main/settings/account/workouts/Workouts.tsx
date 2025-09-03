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

interface IProps {
  section: string;
  time: string;
}
function Workouts({ section, time }: IProps) {
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
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5"
        // isFav && "place-items-center"
      )}
    >
      {isFav && (
        <>
          {!favData ? (
            <SkeletonCard count={10} />
          ) : favs?.length ? (
            favs.map((fav) => <FavoriteWorkoutCard key={fav?.id} fav={fav} />)
          ) : (
            <EmptyStatePage message="No favorite workouts found" />
          )}
        </>
      )}
      {isRecent && (
        <>
          {!data ? (
            <SkeletonCard count={10} />
          ) : recentWorkouts?.length ? (
            recentWorkouts?.map((recent) => (
              <WorkoutCard key={recent?.id} workout={recent} />
            ))
          ) : (
            <EmptyStatePage message="No recent workouts found" />
          )}
        </>
      )}
      {isHistory && (
        <>
          {!data ? (
            <SkeletonCard count={10} />
          ) : historyWorkouts?.length ? (
            historyWorkouts?.map((history) => (
              <WorkoutCard key={history?.id} workout={history} />
            ))
          ) : (
            <EmptyStatePage message="No history workouts found" />
          )}
        </>
      )}
    </div>
  );
}

export default Workouts;
