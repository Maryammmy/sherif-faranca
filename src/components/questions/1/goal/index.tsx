"use client";
import { IQuestion } from "@/src/interfaces/questions";
import SelectGoal from "./SelectGoal";
import Shared from "@/src/components/questions/Shared";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface IProps {
  goals: IQuestion[];
}

function Goal({ goals }: IProps) {
  const t = useTranslations("goal");
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("goalId");
    if (stored) setSelectedGoal(Number(stored));
  }, []);

  const handleSelectGoal = (id: number) => {
    setSelectedGoal(id);
    sessionStorage.setItem("goalId", JSON.stringify(id));
  };

  console.log(selectedGoal);

  // تغيير nextHref حسب الاختيار
  let nextHref = "/questions/1/keep-fit"; // افتراضي
  if (selectedGoal === 1) nextHref = "/questions/1/lose-weight";
  else if (selectedGoal === 2) nextHref = "/questions/1/build-muscle";
  else if (selectedGoal === 3) nextHref = "/questions/1/keep-fit";

  return (
    <Shared
      progresses={[75, 0, 0]}
      title={t("title")}
      coloredTitle={t("subTitle")}
      description={t("description")}
      content={
        <SelectGoal
          goals={goals}
          selectedGoal={selectedGoal}
          handleSelectGoal={handleSelectGoal}
        />
      }
      backHref="/questions/1/bmi"
      nextHref={nextHref} // هنا نمرر القيمة اللي حسب الاختيار
      isNextDisabled={!selectedGoal}
    />
  );
}

export default Goal;
