import { IRecentWorkout } from "@/src/interfaces/main/settings/account/workouts";
import Image from "next/image";

interface IProps {
  recent: IRecentWorkout;
}
function RecentWorkoutCard({ recent }: IProps) {
  const { title } = recent;
  return (
    <div className="p-4 rounded-2xl border space-y-2">
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
        <Image
          src="/workout.jpg"
          alt="workout"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
      <div className="space-y-0.5">
        <div>
          <h2 className="sm:text-lg text-gray-700 font-bold">{title}</h2>
        </div>
        {/* <div className="grid grid-cols-3 gap-2 text-secondary text-sm font-medium">
          <span className="truncate">{formatDateOnly(watchedDate)}</span>
          <span className="truncate">Direction</span>
          <span className="truncate">Calories</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-secondary font-medium">
          <span className="truncate">{formatTimeOnly(watchedDate)}</span>
          <span className="truncate">{durationMinutes} Min</span>
          <span className="truncate">{calories} Calories</span>
        </div> */}
      </div>
    </div>
  );
}

export default RecentWorkoutCard;
