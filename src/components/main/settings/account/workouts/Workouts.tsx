import { cn, useQueryParams } from "@/src/lib/utils";
import HistoryWorkoutCard from "./HistoryCard";
import FavoriteWorkoutCard from "./FavoriteCard";
import { useFavWorkouts, useWorkouts } from "@/src/hooks";
import {
  IFavWorkout,
  IHistoryWorkout,
  IRecentWorkout,
} from "@/src/interfaces/main/settings/account/workouts";
import RecentWorkoutCard from "./RecentCard";

function Workouts() {
  const { section = "history", time = "today" } = useQueryParams();

  const isFav = section === "favorite";
  const isRecent = section === "recent";
  const isHistory = section === "history";

  const { data } = useWorkouts(section, time);
  const { data: favData } = useFavWorkouts(section);

  const historyWorkouts: IHistoryWorkout[] = data?.data;
  const recentWorkouts: IRecentWorkout[] = data;
  const favs: IFavWorkout[] = favData;
  console.log(section);
  console.log(time);
  console.log(recentWorkouts);
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
          <RecentWorkoutCard key={recent?.id} recent={recent} />
        ))}
      {isHistory &&
        data &&
        historyWorkouts?.length > 0 &&
        historyWorkouts?.map((history) => (
          <HistoryWorkoutCard key={history?.id} history={history} />
        ))}
    </div>
  );
}

export default Workouts;
