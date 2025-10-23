import { Button } from "@/src/components/ui/Button";
import { IDurationRange } from "@/src/interfaces/main/discover";
import { Clock12 } from "lucide-react";

interface IProps {
  durations: IDurationRange[];
  selectedDuration: { MinHours: number | null; MaxHours: number | null };
  onSelectDuration: (min: number, max: number) => void;
}

function Durations({ durations, selectedDuration, onSelectDuration }: IProps) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
      {durations?.map(({ label, minHours, maxHours }, index) => {
        // ✅ تحقق إذا كانت دي هي الـ duration المختارة حاليًا
        console.log(minHours, maxHours);
        const isSelected =
          selectedDuration.MinHours === minHours &&
          selectedDuration.MaxHours === maxHours;

        return (
          <Button
            key={index}
            onClick={() => onSelectDuration(minHours, maxHours)}
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition ${
              isSelected
                ? "bg-primary text-white border-primary"
                : "border border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            <span className={isSelected ? "text-white" : "text-primary"}>
              <Clock12 size={20} />
            </span>
            <span>{label}</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Durations;
