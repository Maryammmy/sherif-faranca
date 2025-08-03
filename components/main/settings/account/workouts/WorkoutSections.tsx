import { Button } from "@/components/ui/Button";
import { workoutSections } from "@/data/main/settings/account/workouts";
import { cn } from "@/lib/utils";
import WorkoutTimeFilters from "./WorkoutTimeFilters";

interface IProps {
  selectedSection: string;
  handleSelectSection: (setion: string) => void;
}
function WorkoutSections({ selectedSection, handleSelectSection }: IProps) {
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
      {selectedSection === "history" && <WorkoutTimeFilters />}
    </>
  );
}

export default WorkoutSections;
