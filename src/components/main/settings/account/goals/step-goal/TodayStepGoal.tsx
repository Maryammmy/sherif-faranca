import { Pencil } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { useState } from "react";
import DailyStepGoalModal from "./daily-step-goal";
import { useTranslations } from "next-intl";

interface IProps {
  stepsToday: number;
  stepTarget: number;
}

export default function TodayStepGoal({ stepsToday, stepTarget }: IProps) {
  const t = useTranslations("step.todayStepGoal");
  const [dailyStepGoalOpen, setDailyStepGoalOpen] = useState(false);
  const percent = (stepsToday / stepTarget) * 100;

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-gray-700 font-semibold">{t("title")}</h2>
        <p className="text-sm font-medium text-secondary">{t("description")}</p>

        {/* Semi Circle Progress */}
        <div className="relative w-56 xl:w-70 h-28 lg:h-40 mt-4">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <path
              d="M10,50 A40,40 0 0,1 90,50"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M10,50 A40,40 0 0,1 90,50"
              fill="none"
              stroke="#6b21a8"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${percent * 1.26}, 126`}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-6">
            <p className="text-green-500 text-2xl font-bold">{stepsToday}</p>
            <p className="text-secondary text-sm">
              {stepTarget} {t("steps")}
            </p>
          </div>
        </div>

        <Button
          onClick={() => setDailyStepGoalOpen(true)}
          className="flex items-center gap-2 mt-4 text-gray-600 font-medium"
        >
          <span>{t("weeklyGoal")}</span>
          <Pencil size={14} />
        </Button>
      </div>
      <DailyStepGoalModal
        open={dailyStepGoalOpen}
        onClose={() => setDailyStepGoalOpen(false)}
      />
    </>
  );
}
