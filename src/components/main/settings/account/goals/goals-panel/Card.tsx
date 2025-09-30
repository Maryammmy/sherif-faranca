import Link from "next/link";
import { IGoal } from "@/src/interfaces/main/settings/account/goals";
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

  if (label === "step goal") {
    return (
      <Link
        href="/settings/account/goals/step"
        className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
      >
        <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
          {label}
        </h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
          <span>{value}</span>
          <ChevronRight className="size-4" />
        </div>
      </Link>
    );
  }

  return (
    <button
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
    </button>
  );
}

export default GoalsPanelCard;
