"use client";
import { IQuestion } from "@/src/interfaces/questions";
import SelectInjury from "./SelectInjury";
import Shared from "@/src/components/questions/Shared";
import { useEffect, useState } from "react";

interface IProps {
  injuries: IQuestion[];
}
function Injuries({ injuries }: IProps) {
  const [selectedInjuries, setSelectedInjuries] = useState<number[]>([]);
  useEffect(() => {
    const stored = sessionStorage.getItem("injuryIds");
    if (stored) {
      // Assuming you stored it as a JSON stringified array of numbers
      const parsed: number[] = JSON.parse(stored);
      setSelectedInjuries(parsed);
    }
  }, []);
  const toggleInjury = (id: number) => {
    const updated = selectedInjuries.includes(id)
      ? selectedInjuries.filter((i) => i !== id)
      : [...selectedInjuries, id];
    setSelectedInjuries(updated);
    sessionStorage.setItem("injuryIds", JSON.stringify(updated));
  };
  return (
    <Shared
      progresses={[100, 100, 0]}
      title="Have you Suffered injuries"
      coloredTitle="Recently ?"
      content={
        <SelectInjury
          injuries={injuries}
          selectedInjuries={selectedInjuries}
          toggleInjury={toggleInjury}
        />
      }
      backHref="/questions/2/workout-frequency"
      nextHref="/questions/3"
    />
  );
}

export default Injuries;
