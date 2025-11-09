"use client";
import { useEffect, useState } from "react";
import SelectMusicPreference from "./SelectMusicPreference";
import Shared from "@/src/components/questions/Shared";
import { ISubQuestion } from "@/src/interfaces/questions";
import { useTranslations } from "next-intl";

interface IProps {
  musicPreferences: ISubQuestion[];
}
function MusicPreference({ musicPreferences }: IProps) {
  const t = useTranslations("musicPreference");
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
      title={t("title")}
      coloredTitle={t("subTitle")}
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
