import { Button } from "@/src/components/ui/Button";
import { IDurationRange } from "@/src/interfaces/main/discover";
import { Clock12 } from "lucide-react";

interface IProps {
  durations: IDurationRange[];
}
function Durations({ durations }: IProps) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
      {durations?.map(({ label }, index) => {
        return (
          <Button
            key={index}
            className="flex items-center gap-2 border rounded-md px-3 py-2 transition border-gray-200"
          >
            <span className="text-primary shrink-0">
              <Clock12 size={20} />
            </span>
            <span className="text-secondary">{label}</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Durations;
