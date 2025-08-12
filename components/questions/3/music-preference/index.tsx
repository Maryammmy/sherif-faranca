"use client";
import { useEffect, useState } from "react";
import SelectMusicPreference from "./SelectMusicPreference";
import Shared from "@/components/questions/Shared";
import { ISupQuestion } from "@/interfaces/questions";

interface IProps {
  musicPreferences: ISupQuestion[];
}
function MusicPreference({ musicPreferences }: IProps) {
  const [selectedMusicPreferences, setSelectedMusicPreferences] = useState<
    number[]
  >([]);
  useEffect(() => {
    const stored = sessionStorage.getItem("selectedMusicIds");
    if (stored) {
      // Assuming you stored it as a JSON stringified array of numbers
      const parsed: number[] = JSON.parse(stored);
      setSelectedMusicPreferences(parsed);
    }
  }, []);
  const toggleMusic = (id: number) => {
    const updated = selectedMusicPreferences.includes(id)
      ? selectedMusicPreferences.filter((a) => a !== id)
      : [...selectedMusicPreferences, id];
    setSelectedMusicPreferences(updated);
    sessionStorage.setItem("selectedMusicIds", JSON.stringify(updated));
  };
  return (
    <Shared
      progresses={[100, 100, 100]}
      title="What types of music prefer to"
      coloredTitle="listen ?"
      content={
        <SelectMusicPreference
          musicPreferences={musicPreferences}
          selectedMusicPreferences={selectedMusicPreferences}
          toggleMusic={toggleMusic}
        />
      }
      backHref="/questions/3/workout-time"
      nextHref="/"
    />
  );
}

export default MusicPreference;
