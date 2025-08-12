"use client";
import { IQuestion } from "@/interfaces/questions";
import SelectIdealBodyTime from "./SelectIdealBodyTime";
import Shared from "@/components/questions/Shared";
import { useEffect, useState } from "react";

interface IProps {
  idealBodies: IQuestion[];
}
function IdealBodyTime({ idealBodies }: IProps) {
  const [selectedIdealBody, setSelectedIdealBody] = useState<number | null>(
    null
  );
  useEffect(() => {
    const stored = sessionStorage.getItem("idealBodyTimeId");
    if (stored) setSelectedIdealBody(Number(stored));
  }, []);
  const handleSelectIdealBody = (id: number) => {
    setSelectedIdealBody(id);
    sessionStorage.setItem("idealBodyTimeId", JSON.stringify(id));
  };
  return (
    <Shared
      progresses={[100, 33.33, 0]}
      title="when last time had your"
      coloredTitle="ideal body ?"
      content={
        <SelectIdealBodyTime
          idealBodies={idealBodies}
          selectedIdealBody={selectedIdealBody}
          handleSelectIdealBody={handleSelectIdealBody}
        />
      }
      backHref="/questions/1/fitness-goals"
      nextHref="/questions/2/workout-frequency"
    />
  );
}

export default IdealBodyTime;
