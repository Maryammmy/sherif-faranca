import { Button } from "@/src/components/ui/Button";
import { workoutTimeFilters } from "@/src/data/main/settings/account/workouts";
import { cn } from "@/src/lib/utils";
import { WorkoutHistoryTime } from "@/src/types/main/settings/account/workouts";

interface IProps {
  selectedTime: string;
  handleSelectTime: (time: WorkoutHistoryTime) => void;
}
function WorkoutTimeFilters({ selectedTime, handleSelectTime }: IProps) {
  return (
    <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-5">
      {workoutTimeFilters.map((time, index) => (
        <Button
          key={index}
          onClick={() => handleSelectTime(time)}
          className={cn(
            "font-medium py-1 sm:px-4 text-sm sm:text-base rounded-lg capitalize",
            selectedTime === time
              ? "bg-primary text-white"
              : "border sm:border-none text-secondary"
          )}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}

export default WorkoutTimeFilters;
