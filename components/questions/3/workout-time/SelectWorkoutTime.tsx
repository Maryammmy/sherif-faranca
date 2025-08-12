import { Button } from "@/components/ui/Button";
import { ISupQuestion } from "@/interfaces/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface IProps {
  workoutTimes: ISupQuestion[];
  selectedWorkoutTime: number | null;
  handleSelectWorkoutTime: (id: number) => void;
}
function SelectWorkoutTime({
  workoutTimes,
  selectedWorkoutTime,
  handleSelectWorkoutTime,
}: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
      {workoutTimes.map(({ id, name }) => (
        <Button
          key={id}
          onClick={() => handleSelectWorkoutTime(id)}
          className={cn(
            "bg-white relative flex flex-col gap-3 p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedWorkoutTime === id &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedWorkoutTime === id && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <h5 className="text-start text-secondary font-medium text-xl">
            {name}
          </h5>
        </Button>
      ))}
    </div>
  );
}

export default SelectWorkoutTime;
