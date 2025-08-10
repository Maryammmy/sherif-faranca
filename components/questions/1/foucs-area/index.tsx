"use client";
import { useState } from "react";
import SelectArea from "./SelectArea";
import Shared from "@/components/questions/Shared";
import { IArea } from "@/interfaces/questions";

interface IProps {
  areas?: IArea[];
}
function FoucsArea({ areas }: IProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  console.log("areas", areas);
  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };
  return (
    <Shared
      progresses={[25, 0, 0]}
      title="What's your"
      coloredTitle="Focus area ?"
      content={
        <SelectArea selectedAreas={selectedAreas} toggleArea={toggleArea} />
      }
      backHref="/questions/1/gender"
      nextHref="/questions/1/height"
    />
  );
}

export default FoucsArea;
