"use client";
import { useEffect, useState } from "react";
import SelectShape from "./SelectShape";
import Shared from "@/src/components/questions/Shared";
import { IQuestion } from "@/src/interfaces/questions";
import { useTranslations } from "next-intl";

interface IProps {
  shapes: IQuestion[];
}
function Shape({ shapes }: IProps) {
  const t = useTranslations("shape");
  const [selectedShape, setSelectedShape] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("bodyShapeId");
    if (stored) {
      setSelectedShape(Number(stored));
    }
  }, []);

  const handleSelectShape = (id: number) => {
    setSelectedShape(id);
    sessionStorage.setItem("bodyShapeId", JSON.stringify(id));
  };
  return (
    <Shared
      progresses={[100, 0, 0]}
      title={t("title")}
      coloredTitle={t("subTitle")}
      content={
        <SelectShape
          shapes={shapes}
          selectedShape={selectedShape}
          handleSelectShape={handleSelectShape}
        />
      }
      backHref="/questions/1/keep-fit"
      nextHref="/questions/1/fitness-goals"
      isNextDisabled={!selectedShape}
    />
  );
}

export default Shape;
