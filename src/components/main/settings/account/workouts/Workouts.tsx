import { cn } from "@/src/lib/utils";
import FavoriteWorkoutCard from "./FavoriteCard";
import { useFavWorkouts, useWorkouts } from "@/src/hooks";
import {
  IFavWorkout,
  IWorkout,
} from "@/src/interfaces/main/settings/account/workouts";
import WorkoutCard from "./Card";

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
      {isFav &&
        favData &&
        favs?.length > 0 &&
        favs?.map((fav) => <FavoriteWorkoutCard key={fav?.id} fav={fav} />)}
      {isRecent &&
        data &&
        recentWorkouts?.length > 0 &&
        recentWorkouts?.map((recent) => (
          <WorkoutCard key={recent?.id} workout={recent} />
        ))}
      {isHistory &&
        data &&
        historyWorkouts?.length > 0 &&
        historyWorkouts?.map((history) => (
          <WorkoutCard key={history?.id} workout={history} />
        ))}
    </div>
  );
}

export default Workouts;
