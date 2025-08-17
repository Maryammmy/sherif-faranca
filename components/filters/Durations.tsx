import { IDuration } from "@/interfaces/filters";
import { Clock12 } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface IProps {
  durations: IDuration[];
  value: IDuration | null;
  onChange: (duration: IDuration) => void;
}

function Durations({ durations, value, onChange }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">Durations</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {durations?.map((duration, index) => {
          const isActive =
            value?.minDuration === duration.minDuration &&
            value?.maxDuration === duration.maxDuration;

          return (
            <Button
              key={index}
              className={cn(
                "flex items-center gap-2 border rounded-md px-3 py-2 transition",
                isActive ? "border-primary bg-primary/5" : "border-gray-200"
              )}
              onClick={() => onChange(duration)}
            >
              <span className="text-primary shrink-0">
                <Clock12 size={20} />
              </span>
              <span className="text-secondary">
                {duration.minDuration}-{duration.maxDuration} Minute
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Durations;
