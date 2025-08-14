import { IDuration } from "@/interfaces/filters";
import { Clock12 } from "lucide-react";
import { Button } from "../ui/Button";

interface IProps {
  durations: IDuration[];
}
function Durations({ durations }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">Durations</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {durations?.map(({ maxDuration, minDuration }, index) => (
          <Button
            key={index}
            className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2"
          >
            <span className="text-primary shrink-0">
              <Clock12 size={20} />
            </span>
            <span className="text-secondary">
              {minDuration}-{maxDuration} Minute
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Durations;
