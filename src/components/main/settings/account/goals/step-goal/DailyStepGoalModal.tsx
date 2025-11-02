import { Button } from "@/src/components/ui/Button";
import Modal from "@/src/components/ui/Modal";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
}

function DailyStepGoalModal({ open, onClose }: IProps) {
  const t = useTranslations("step.todayStepGoal.dailyStepGoal");
  const [tab, setTab] = useState<"recommended" | "custom">("recommended");
  const [customValue, setCustomValue] = useState(5500);

  const recommendedGoals = [
    { label: "Become Active", steps: 2500 },
    { label: "Keep Fit", steps: 5000 },
    { label: "Best Metabolism", steps: 8000 },
    { label: "Lose Weight", steps: 15000 },
  ];

  // generate values from 5000 to 7000 step = 500
  const customSteps = Array.from({ length: 8 }, (_, i) => 5000 + i * 500);

  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="md:max-w-xs"
      title={t("title")}
      titleClassName="font-semibold text-gray-600 text-start"
    >
      <div className="">
        {/* Tabs */}
        <div className="flex gap-6 border-b mb-4">
          <Button
            onClick={() => setTab("recommended")}
            className={`pb-2 text-sm font-medium ${
              tab === "recommended"
                ? "text-primary border-b-2 border-primary"
                : "text-secondary"
            }`}
          >
            {t("recommended")}
          </Button>
          <Button
            onClick={() => setTab("custom")}
            className={`pb-2 text-sm font-medium ${
              tab === "custom"
                ? "text-primary border-b-2 border-primary"
                : "text-secondary"
            }`}
          >
            {t("custom")}
          </Button>
        </div>

        <div className="h-[218.4px] overflow-y-auto">
          {/* Recommended Tab */}
          {tab === "recommended" && (
            <div className="flex flex-col gap-3">
              {recommendedGoals.map((goal) => (
                <div
                  key={goal.steps}
                  className="flex justify-between items-center text-sm font-medium border rounded-lg p-3 cursor-pointer hover:border-primary"
                >
                  <span>{goal.label}</span>
                  <span>
                    {goal.steps} {t("stepsDay")}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Custom Tab with scroll picker */}
          {tab === "custom" && (
            <div className="flex flex-col items-center">
              {customSteps.map((value) => (
                <div
                  key={value}
                  onClick={() => setCustomValue(value)}
                  className={`py-2 text-lg font-semibold cursor-pointer ${
                    customValue === value
                      ? "text-primary scale-110"
                      : "text-gray-400"
                  } transition`}
                >
                  {value}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <Button className="w-full mt-5 bg-primary text-white py-2 rounded-lg font-semibold">
          {t("change")}
        </Button>
      </div>
    </Modal>
  );
}

export default DailyStepGoalModal;
