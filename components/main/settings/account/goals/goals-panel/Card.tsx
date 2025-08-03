import { Button } from "@/components/ui/Button";
import { IGoal } from "@/interfaces/main/settings/account/goals";
import { ChevronRight } from "lucide-react";

interface IProps {
  goal: IGoal;
  handleOpenFitnessGoal?: () => void;
  handleOpenWeightGoal?: () => void;
}
function GoalsPanelCard({
  goal,
  handleOpenFitnessGoal,
  handleOpenWeightGoal,
}: IProps) {
  const { label, value } = goal;
  const handleClick = () => {
    if (label === "fitness goal" && handleOpenFitnessGoal) {
      handleOpenFitnessGoal();
    } else if (label === "weight goal" && handleOpenWeightGoal) {
      handleOpenWeightGoal();
    }
  };
  return (
    <Button
      onClick={handleClick}
      className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
    >
      <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
        {label}
      </h3>
      <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
        <span>{value}</span>
        <ChevronRight className="size-4" />
      </div>
    </Button>
  );
}

export default GoalsPanelCard;
