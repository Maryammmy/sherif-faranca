"use client";
import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import {
  customStepGoalAPI,
  recommendedStepGoalAPI,
} from "@/src/services/mutations/goals";
import { useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";
import RecommendedGoalsTab from "./RecommendedGoalsTab";
import CustomGoalsTab from "./CustomGoalsTab";

interface IProps {
  onClose: () => void;
}

export default function DailyStepGoal({ onClose }: IProps) {
  const t = useTranslations("step.todayStepGoal.dailyStepGoal");
  const [tab, setTab] = useState<"recommended" | "custom">("recommended");
  const [loading, setLoading] = useState(false);
  const [recommendedValue, setRecommendedValue] = useState<number | null>(null);
  const [customValue, setCustomValue] = useState(5500);

  const handleStepGoal = async () => {
    setLoading(true);
    let response;

    if (tab === "custom") {
      response = await customStepGoalAPI({ stepGoals: customValue });
    } else {
      if (recommendedValue) {
        response = await recommendedStepGoalAPI({
          id: recommendedValue,
        });
      } else {
        toast.error(t("recommendedError"));
        setLoading(false);
        return;
      }
    }
    if (response?.success) {
      toast.success(response.message);
      setTimeout(onClose, 500);
    } else {
      toast.error(response.message);
    }

    setLoading(false);
  };

  return (
    <div>
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
        {tab === "recommended" ? (
          <RecommendedGoalsTab
            recommendedValue={recommendedValue}
            onSelect={(value: number) => setRecommendedValue(value)}
          />
        ) : (
          <CustomGoalsTab
            customValue={customValue}
            onSelect={(value: number) => setCustomValue(value)}
          />
        )}
      </div>

      <Button
        onClick={handleStepGoal}
        className="w-full mt-5 bg-primary text-white py-2 rounded-md font-semibold"
      >
        {loading ? <Loader /> : t("change")}
      </Button>
    </div>
  );
}
