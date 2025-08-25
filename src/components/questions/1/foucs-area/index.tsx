"use client";
import { useEffect, useState } from "react";
import SelectArea from "./SelectArea";
import Shared from "@/src/components/questions/Shared";
import { IArea } from "@/src/interfaces/questions";

interface IProps {
  areas: IArea[];
}
function FoucsArea({ areas }: IProps) {
  const [selectedAreas, setSelectedAreas] = useState<number[]>([]);
  useEffect(() => {
    const stored = sessionStorage.getItem("selectedTrainingAreaIds");
    if (stored) {
      // Assuming you stored it as a JSON stringified array of numbers
      const parsed: number[] = JSON.parse(stored);
      setSelectedAreas(parsed);
    }
  }, []);
  const toggleArea = (id: number) => {
    const updated = selectedAreas.includes(id)
      ? selectedAreas.filter((a) => a !== id)
      : [...selectedAreas, id];
    setSelectedAreas(updated);
    sessionStorage.setItem("selectedTrainingAreaIds", JSON.stringify(updated));
  };
  return (
    <Shared
      progresses={[25, 0, 0]}
      title="What's your"
      coloredTitle="Focus area ?"
      content={
        <SelectArea
          areas={areas}
          selectedAreas={selectedAreas}
          toggleArea={toggleArea}
        />
      }
      backHref="/questions/1/gender"
      nextHref="/questions/1/height"
      isNextDisabled={!selectedAreas?.length}
    />
  );
}

export default FoucsArea;
