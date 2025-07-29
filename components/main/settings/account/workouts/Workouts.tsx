import { cn } from "@/lib/utils";
import WorkoutsCard from "./Card";
import FavoriteWorkoutsCard from "./FavoriteCard";

interface IProps {
  selectedSection: string;
}
function Workouts({ selectedSection }: IProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5",
        selectedSection === "favorite" && "place-items-center"
      )}
    >
      {Array.from({ length: 10 }).map((_, index) =>
        selectedSection === "favorite" ? (
          <FavoriteWorkoutsCard key={index} />
        ) : (
          <WorkoutsCard key={index} />
        )
      )}
    </div>
  );
}

export default Workouts;
