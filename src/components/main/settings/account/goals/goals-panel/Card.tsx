import Link from "next/link";
import { IGoal } from "@/src/interfaces/main/settings/account/goals";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/Button";

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
  const t = useTranslations("myGoal");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;
  const { label, value } = goal;

  const handleClick = () => {
    if (t(label) === t("fitnessGoal") && handleOpenFitnessGoal) {
      handleOpenFitnessGoal();
    } else if (t(label) === t("weightGoal") && handleOpenWeightGoal) {
      handleOpenWeightGoal();
    }
  };

  if (t(label) === t("stepGoal")) {
    return (
      <Link
        href="/settings/account/goals/step"
        className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
      >
        <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
          {t(label)}
        </h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
          <span>{value}</span>
          <ChevronIcon className="size-4" />
        </div>
      </Link>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className="p-3 bg-gray-50 rounded-md flex items-center justify-between gap-3 sm:gap-5"
    >
      <h3 className="text-gray-700 font-medium capitalize text-xs sm:text-base shrink-0">
        {t(label)}
      </h3>
      <div className="flex items-center gap-1 text-xs sm:text-sm text-secondary font-medium shrink-0">
        <span>{value}</span>
        <ChevronIcon className="size-4" />
      </div>
    </Button>
  );
}

export default GoalsPanelCard;
