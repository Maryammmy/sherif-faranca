"use client";
import { IFitnessLevel } from "@/src/interfaces/questions";
import SelectFitnessLevel from "./SelectFitnessLevel";
import Shared from "@/src/components/questions/Shared";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface IProps {
  fitnessLevels: IFitnessLevel[];
}
function FitnessLevel({ fitnessLevels }: IProps) {
  const t = useTranslations("fitnessLevel");
  const [selectedFitnessLevel, setSelectedFitnessLevel] = useState<
    number | null
  >(null);
  const handleSelectFitnessLevel = (id: number) => {
    setSelectedFitnessLevel(id);
    sessionStorage.setItem("levelId", JSON.stringify(id));
  };
  useEffect(() => {
    const stored = sessionStorage.getItem("levelId");
    if (stored) setSelectedFitnessLevel(Number(stored));
  }, []);
  return (
    <Shared
      progresses={[100, 100, 33.33]}
      title={t("title")}
      coloredTitle={t("subTitle")}
      content={
        <SelectFitnessLevel
          fitnessLevels={fitnessLevels}
          selectedFitnessLevel={selectedFitnessLevel}
          handleSelectFitnessLevel={handleSelectFitnessLevel}
        />
      }
      backHref="/questions/2/injuries"
      nextHref="/questions/3/workout-time"
    />
  );
}

export default FitnessLevel;
