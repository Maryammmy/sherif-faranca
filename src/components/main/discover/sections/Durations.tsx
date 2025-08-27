import { Button } from "@/src/components/ui/Button";
import { Clock12 } from "lucide-react";

function Durations() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Button
            key={index}
            className="flex items-center gap-2 border rounded-md px-3 py-2 transition border-gray-200"
          >
            <span className="text-primary shrink-0">
              <Clock12 size={20} />
            </span>
            <span className="text-secondary">10-8 Minute</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Durations;
