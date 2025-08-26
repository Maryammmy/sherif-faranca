import { Button } from "@/src/components/ui/Button";
import { workoutSections } from "@/src/data/main/settings/account/workouts";
import { cn } from "@/src/lib/utils";
import WorkoutTimeFilters from "./WorkoutTimeFilters";
import {
  WorkoutHistoryTime,
  WorkoutSection,
} from "@/src/types/main/settings/account/workouts";

interface IProps {
  selectedSection: string;
  handleSelectSection: (section: WorkoutSection) => void;
  selectedTime: string;
  handleSelectTime: (time: WorkoutHistoryTime) => void;
}
function WorkoutSections({
  selectedSection,
  handleSelectSection,
  selectedTime,
  handleSelectTime,
}: IProps) {
  return (
    <>
      <div className="grid grid-cols-3 place-items-center sm:flex sm:items-center sm:justify-center gap-5">
        {workoutSections.map((section, index) => (
          <Button
            key={index}
            onClick={() => handleSelectSection(section)}
            className={cn(
              "font-semibold p-2 sm:text-lg activeBtn capitalize",
              selectedSection === section
                ? "text-primary active"
                : "text-secondary"
            )}
          >
            {section}
          </Button>
        ))}
      </div>
      {selectedSection === "history" && (
        <WorkoutTimeFilters
          selectedTime={selectedTime}
          handleSelectTime={handleSelectTime}
        />
      )}
    </>
  );
}

export default WorkoutSections;
