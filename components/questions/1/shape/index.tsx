"use client";
import { useState } from "react";
import SelectShape from "./SelectShape";
import Shared from "@/components/questions/Shared";
import { IQuestion } from "@/interfaces/questions";

interface IProps {
  shapes: IQuestion[];
}
function Shape({ shapes }: IProps) {
  const [selectedShape, setSelectedShape] = useState<number | null>(() => {
    const stored = sessionStorage.getItem("bodyShapeId");
    return stored ? Number(stored) : null;
  });
  const handleSelectShape = (id: number) => {
    setSelectedShape(id);
    sessionStorage.setItem("bodyShapeId", JSON.stringify(id));
  };
  return (
    <Shared
      progresses={[100, 0, 0]}
      title="What's your Current"
      coloredTitle="body Shape ?"
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
